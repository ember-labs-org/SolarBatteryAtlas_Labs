/* Ember Labs event tracking for the Solar + Battery Atlas.
 *
 * Uses Umami (cookieless, no personal data). The Umami script is loaded in index.html;
 * this file only watches the page for clicks and changes and reports the ones listed
 * below. It does not touch the app's own code, so syncs from the Ember Futures repo
 * stay clean. If Umami is blocked or not loaded, nothing happens and the tool works as
 * normal.
 *
 * Every event carries tool: 'solar-battery-atlas', so one Umami website can hold all
 * Labs tools. To add the wind version later, copy this file and change TOOL.
 *
 * Events
 *   view_changed               {view}               main tabs: capacity, samples, potential, lcoe, population
 *   tour_started               {}
 *   info_opened                {}
 *   slider_set                 {control, value}     on release, not while dragging
 *   assumption_edited          {field}              cost and finance inputs (field name only)
 *   option_toggled             {option, on}         diesel backup, day/night
 *   sample_week_selected       {week}
 *   animation_played           {control}            sample weeks and LCOE-over-time play buttons
 *   target_type_changed        {target}             utilization or LCOE target
 *   cost_mode_changed          {mode, section}      global or local assumptions
 *   base_layer_changed         {layer}              supply-demand base layer
 *   overlay_changed            {overlay}            supply-demand overlay
 *   population_display_changed {display}            map or charts
 *   potential_level_changed    {level}
 *   potential_display_changed  {display}
 *   plant_filter_changed       {filter, value}      fuel or status buttons
 *   lcoe_comparison_changed    {mode}               LCOE delta or transmission cost
 *   access_view_changed        {view}               reliability or no access
 *   cumulative_toggled         {}
 *   map_location_clicked       {view}               a click (not a drag) on the map
 */
(function () {
    'use strict';

    var TOOL = 'solar-battery-atlas';
    var currentView = 'capacity';

    function track(name, data) {
        try {
            if (!window.umami || typeof window.umami.track !== 'function') return;
            var payload = { tool: TOOL };
            if (data) {
                Object.keys(data).forEach(function (k) {
                    var v = data[k];
                    if (v !== undefined && v !== null && v !== '') payload[k] = v;
                });
            }
            window.umami.track(name, payload);
        } catch (e) {
            /* never let tracking break the tool */
        }
    }
    window.labsTrack = track;

    function sectionOf(el) {
        var s = el.parentElement && el.parentElement.closest('[id]');
        return s ? s.id : undefined;
    }
    function controlName(id) {
        return id.replace(/-(slider|input|toggle)$/, '');
    }

    var VIEWS = { capacity: 1, samples: 1, potential: 1, lcoe: 1, population: 1 };
    var PLAYS = { 'sample-play': 1, 'lcoe-time-play': 1, 'pop-lcoe-time-play': 1 };

    // Clicks on buttons (capture phase, so the app's own handlers can't hide them).
    document.addEventListener('click', function (e) {
        var b = e.target && e.target.closest ? e.target.closest('button') : null;
        if (!b) return;
        var d = b.dataset || {};

        if (d.mode) {
            if (VIEWS[d.mode]) {
                currentView = d.mode;
                track('view_changed', { view: d.mode });
            } else if (d.mode === 'global' || d.mode === 'local') {
                track('cost_mode_changed', { mode: d.mode, section: sectionOf(b) });
            } else if (d.mode === 'map' || d.mode === 'charts') {
                track('population_display_changed', { display: d.mode });
            } else if (d.mode === 'delta' || d.mode === 'transmission') {
                track('lcoe_comparison_changed', { mode: d.mode });
            }
            return;
        }
        if (d.targetMode) return track('target_type_changed', { target: d.targetMode });
        if (d.level) return track('potential_level_changed', { level: d.level });
        if (d.display) return track('potential_display_changed', { display: d.display });
        if (d.base) return track('base_layer_changed', { layer: d.base });
        if (d.overlay) return track('overlay_changed', { overlay: d.overlay });
        if (d.fuel) return track('plant_filter_changed', { filter: 'fuel', value: d.fuel });
        if (d.status) return track('plant_filter_changed', { filter: 'status', value: d.status });

        switch (b.id) {
            case 'tour-start': return track('tour_started');
            case 'info-toggle': return track('info_opened');
            case 'btn-access-rel': return track('access_view_changed', { view: 'reliability' });
            case 'btn-access-none': return track('access_view_changed', { view: 'no_access' });
            case 'chart-cumulative-toggle': return track('cumulative_toggled');
        }
        if (PLAYS[b.id]) track('animation_played', { control: b.id });
    }, true);

    // Changes: sliders fire 'change' once on release, inputs once when edited.
    document.addEventListener('change', function (e) {
        var t = e.target;
        if (!t || !t.id) return;
        if (t.type === 'range') {
            if (t.id === 'time-scrubber') return; // scrubbing through a week is not a setting
            track('slider_set', { control: controlName(t.id), value: Number(t.value) });
        } else if (t.type === 'number') {
            track('assumption_edited', { field: t.id });
        } else if (t.type === 'checkbox') {
            track('option_toggled', { option: controlName(t.id), on: t.checked });
        } else if (t.tagName === 'SELECT' && t.id === 'sample-week-select') {
            track('sample_week_selected', { week: t.value });
        }
    }, true);

    // Map clicks: count a click on a location, not the end of a drag or a click on a
    // map control. At most one event every 2 seconds.
    var down = null, lastMapClick = 0;
    document.addEventListener('pointerdown', function (e) {
        var onMap = e.target && e.target.closest && e.target.closest('#map, #map-supply');
        down = onMap && !e.target.closest('.leaflet-control') ? { x: e.clientX, y: e.clientY } : null;
    }, true);
    document.addEventListener('pointerup', function (e) {
        if (!down) return;
        var moved = Math.abs(e.clientX - down.x) + Math.abs(e.clientY - down.y);
        down = null;
        var now = Date.now();
        if (moved < 6 && now - lastMapClick > 2000) {
            lastMapClick = now;
            track('map_location_clicked', { view: currentView });
        }
    }, true);
})();
