'use strict';

(function() {

    Polymer('fin-hypergrid-data-model-decorator-base', { /* jshint ignore:line  */

        component: null,

        setComponent: function(newComponent) {
            this.component = newComponent;
        },

        getComponent: function() {
            return this.component;
        },

        getValue: function(x, y) {
            return this.getComponent().getValue(x, y);
        },

        setValue: function(x, y, value) {
            this.getComponent().setValue(x, y, value);
        },

        getColumnCount: function() {
            return this.getComponent().getColumnCount();
        },

        getRowCount: function() {
            return this.getComponent().getRowCount();
        },

        getCellRenderer: function(config, x, y, untranslatedX, untranslatedY) {
            return this.getComponent().getCellRenderer(config, x, y, untranslatedX, untranslatedY);
        },

        getRowHeight: function(y) {
            return this.getComponent().getRowHeight(y);
        },

        getColumnEdge: function(x, renderer) {
            return this.getComponent().getColumnEdge(x, renderer);
        },

        getColumnWidth: function(x) {
            return this.getComponent().getColumnWidth(x);
        },

        setColumnWidth: function(x, width) {
            this.getComponent().setColumnWidth(x, width);
        },

        setGrid: function(newGrid) {
            this.grid = newGrid;
            this.getComponent().setGrid(newGrid);
        },

        toggleSort: function(x, keys) {
            this.getComponent().toggleSort(x, keys);
        },

        getCellEditorAt: function(x, y) {
            return this.getComponent().getCellEditorAt(x, y);
        },

        getColumnProperties: function(columnIndex) {
            return this.getComponent().getColumnProperties(columnIndex);
        },

        setColumnProperties: function(columnIndex, properties) {
            this.getComponent().setColumnProperties(columnIndex, properties);
        },

        checkColumnAutosizing: function(minWidths) {
            return this.getComponent().checkColumnAutosizing(minWidths);
        },

        setState: function(memento) {
            this.getComponent().setState(memento);
        },

        getHeaders: function() {
            return this.getComponent().getHeaders();
        },

        getFields: function() {
            return this.getComponent().getFields();
        },

        setFields: function(fields) {
            this.getComponent().setFields(fields);
            this.getBehavior().resetColumnIndexes();
        },

        getCellProperties: function(x, y) {
            return this.getComponent().getCellProperties(x, y);
        },

        setCellProperties: function(x, y, value) {
            this.getComponent().setCellProperties(x, y, value);
        },

        getRow: function(y) {
            return this.getComponent().getRow(y);
        },

        convertViewPointToDataPoint: function(viewPoint) {
            return this.getComponent().convertViewPointToDataPoint(viewPoint);
        },
        convertDataPointToViewPoint: function(dataPoint) {
            return this.getComponent().convertDataPointToViewPoint(dataPoint);
        },
        hasHierarchyColumn: function() {
            return this.getComponent().hasHierarchyColumn();
        },
        getRowContextFunction: function(y) {
            return this.getComponent().getRowContextFunction(y);
        }
    });

})();
