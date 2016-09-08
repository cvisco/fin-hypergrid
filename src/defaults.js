/* eslint-env browser */

'use strict';

var LRUCache = require('lru-cache');


/**
 * This module lists the properties that can be set on a {@link Hypergrid} along with their default values.
 * Edit this file to override the defaults.
 * @module defaults
 */

module.exports = {

    // TODO: change this
    /**
     * The font for data cells.
     * @default
     * @type {cssFont}
     * @instance
     */
    noDataMessage: 'no data to display',


    /**
     * The font for data cells.
     * @default
     * @type {cssFont}
     * @instance
     */
    font: '12px Menlo, Monaco, Consolas, Courier New, monospace',

    /**
     * Font color for data cells.
     * @default
     * @type {string}
     * @instance
     */
    color: '#333D47',

    /**
     * Background color for data cells.
     * @default
     * @type {string}
     * @instance
     */
    backgroundColor: '#FFF',

    // TODO: add that to implementation
    /**
     * Background color for odd data cells.
     * @default
     * @type {string}
     * @instance
     */
    //backgroundAdditionalColor: 'rgba(151,172,172,.05)',

    // TODO: remove that
    /**
     * Font style for selected cell(s).
     * @default
     * @type {string}
     * @instance
     */
    foregroundSelectionFont: '12px Menlo, Monaco, Consolas, Courier New, monospace',

    // TODO: remove that
    /**
     * Font color for selected cell(s).
     * @default
     * @type {string}
     * @instance
     */
    foregroundSelectionColor: '#333D47',

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    sortOnHiddenColumns: false,

    /**
     * Background color for selected cell(s).
     * @default
     * @type {string}
     * @instance
     */
    backgroundSelectionColor: '#BFE0E6',


    /********** SECTION: COLUMN HEADER COLORS **********/

    // IMPORTANT CAVEAT: The code is inconsistent regarding the terminology. Is the "column header" section _the row_ of cells at the top (that act as headers for each column) or is it _the column_ of cells (that act as headers for each row)? Oh my.

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    columnHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderColor: '#597889',

    // TODO: remove this
    /**
     * Font style for selected columns' headers.
     * @default
     * @type {string}
     * @instance
     */
    columnHeaderForegroundSelectionFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderBackgroundColor: '#F2F4F6',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderForegroundSelectionColor: '#FFF',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderBackgroundSelectionColor: '#0285CB',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderForegroundColumnSelectionColor: '#FFF',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderBackgroundColumnSelectionColor: '#0285CB',


    /********** SECTION: ROW HEADER COLORS **********/

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    rowHeaderFont: '13px Helvetica Neue, Helvetica, Arial, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderColor: '#BFCBD1',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderBackgroundColor: '#F2F4F6',

    // TODO: check if needed and remove
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderForegroundSelectionColor: '#BFCBD1',

    // TODO: remove this
    /**
     * Font style for selected rows' headers.
     * @default
     * @type {string}
     * @instance
     */
    rowHeaderForegroundSelectionFont: '13px Helvetica Neue, Helvetica, Arial, sans-serif',

    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderBackgroundSelectionColor: '#F2F4F6',

    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderForegroundRowSelectionColor: '#BFCBD1',

    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderBackgroundRowSelectionColor: '#F2F4F6',

    /********** SECTION: TREE COLUMN COLORS **********/
    // The "tree column" contains the hierarchical drill-down controls.
    // TODO: remove this
    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    treeColumnFont: '12px Tahoma, Geneva, sans-serif',
    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnColor: 'rgb(25, 25, 25)',
    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnBackgroundColor: 'rgb(223, 227, 232)',
    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnForegroundSelectionColor: 'rgb(25, 25, 25)',
    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnBackgroundSelectionColor: 'rgba(255, 220, 97, 0.45)',
    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnForegroundColumnSelectionColor: 'rgb(25, 25, 25)',
    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnBackgroundColumnSelectionColor: 'rgb(255, 180, 0)',
    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    backgroundColor2: 'red',


    /**
     * Vertical offset of the cell
     * @default
     * @type {number}
     * @instance
     */
    voffset: 0,

    // TODO: understand wats going on here
    /**
     * @default
     * @type {string}
     * @instance
     */
    scrollbarHoverOver: 'visible',

    // TODO: understand wats going on here
    /**
     * @default
     * @type {string}
     * @instance
     */
    scrollbarHoverOff: 'hidden',

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    scrollingEnabled: true,


    // TODO: check if needed
    /**
     * @default
     * @type {string}
     * @instance
     */
    vScrollbarClassPrefix: '',


    // TODO: check if needed
    /**
     * @default
     * @type {string}
     * @instance
     */
    hScrollbarClassPrefix: '',

    //these used to be in the constants element


    // TODO: looks like it is not needed
    /**
     * @default
     * @type {string}
     * @instance
     */
    fixedRowAlign: 'center',

    // TODO: looks like it is not needed
    /**
     * @default
     * @type {string}
     * @instance
     */
    fixedColAlign: 'center',

    // TODO: fix the case when it is changed while resizing the column width
    /**
     * Horizontal padding of cell
     * @default
     * @type {number}
     * @instance
     */
    cellPadding: 10,

    /**
     * Show / hide the horizontal lines in grid
     * @default
     * @type {boolean}
     * @instance
     */
    gridLinesH: true,

    /**
     * * Show / hide the vertical lines in grid
     * @default
     * @type {boolean}
     * @instance
     */
    gridLinesV: true,

    // TODO: remove that
    /**
     * @default
     * @type {boolean}
     * @instance
     */
    gridLinesVOverflow: false,

    // TODO: refactor this approach. Provide the posibility to change the border of particular column
    /**
     * Grid cell border color
     * @default
     * @type {cssColor}
     * @instance
     */
    lineColor: '#EBEFF1',

    /**
     * Cell border width
     * @default
     * @type {number}
     * @instance
     */
    lineWidth: 1,

    /**
     * Cell height
     * @default
     * @type {number}
     * @instance
     */
    defaultRowHeight: 32,

    /**
     * Default column width
     * @default
     * @type {number}
     * @instance
     */
    defaultColumnWidth: 100,

    //for immediate painting, set these values to 0, true respectively
    // TODO: play with this parameters to get a better understanding how to render big data set
    /**
     * @default
     * @type {number}
     * @instance
     */
    repaintIntervalRate: 60,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    repaintImmediately: false,

    /**
     * enable or disable double buffering
     * @default
     * @type {boolean}
     * @instance
     */
    useBitBlit: false,


    /**
     * @default
     * @type {boolean}
     * @instance
     */
    useHiDPI: true,

    /**
     * @default ['alt', 'esc']
     * @type {string}
     * @instance
     */
    editorActivationKeys: ['alt', 'esc'],

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    readOnly: false,

    // inherited by cell renderers

    /**
     * @default `getTextWidth`
     * @type {function}
     * @instance
     */
    getTextWidth: getTextWidth,

    /**
     * @default `getTextHeight`
     * @type {function}
     * @instance
     */
    getTextHeight: getTextHeight,


    // TODO: check if needed
    /**
     * Define the number of fixed columns (not re-orderable etc)
     * @default
     * @type {number}
     * @instance
     */
    fixedColumnCount: 0,

    // TODO: check if needed. Looks like it is not needed
    /** Define the number of fixed columns (not re-orderable etc)
     * @default
     * @type {number}
     * @instance
     */
    fixedRowCount: 0,

    // TODO: check if needed. Looks like it is not needed
    /**
     * @default
     * @type {number}
     * @instance
     */
    headerColumnCount: 0,


    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showRowNumbers: true,

    // TODO: remove this
    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showTreeColumn: false,

    /**
     * Showe / hide the table header
     * @default
     * @type {boolean}
     * @instance
     */
    showHeaderRow: true,

    /** Clicking in a cell "selects" it; it is added to the select region and repainted with "cell selection" colors.
     * @default
     * @type {boolean}
     * @instance
     */
    cellSelection: true,

    /** Clicking in a row header (leftmost column) "selects" the row; the entire row is added to the select region and repainted with "row selection" colors.
     * @default
     * @type {boolean}
     * @instance
     */
    columnSelection: true,

    /** Clicking in a column header (top row) "selects" the column; the entire column is added to the select region and repainted with "column selection" colors.
     * @default
     * @type {boolean}
     * @instance
     */
    rowSelection: false,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    singleRowSelectionMode: false,

    // TODO: remove this
    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    selectionRegionOverlayColor: 'rgba(0, 0, 48, 0.2)',

    // TODO: remove this
    /**
     * @default
     * @type {string}
     * @instance
     */
    selectionRegionOutlineColor: 'black',

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    columnAutosizing: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    rowNumberAutosizing: true,

    // TODO: investigate what it is
    /**
     * @default
     * @type {boolean}
     * @instance
     */
    headerTextWrapping: false,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    rowResize: false,

    // TODO: looks like is not needed or is broken now
    /**
     * @default
     * @type {boolean}
     * @instance
     */
    editable: false,

    // TODO: looks like is not needed or is broken now
    /**
     * @default
     * @type {boolean}
     * @instance
     */
    editOnDoubleClick: false,

    /**
     * @default
     * @type {number}
     * @instance
     */
    doubleClickDelay: 1,


    // TODO: Looks like the grid level props are broken or not needed. double check
    /**
     * Grid-level property.
     * When user presses a printable character key _or_ BACKSPACE _or_ DELETE:
     * 1. Activate cell editor on current cell (i.e., origin of most recent selection).
     * 2. If cell editor is a text editor:
     *    1. Replace current value with the character the user typed; or
     *    2. Clear it on BACKSPACE, DELETE, or other invalid character (_e.g._ when user types a letter but the cell editor only accepts digits).
     *
     * > In invoked, user has the option to back out by pressing the ESCAPE key.
     *
     * @default
     * @type {boolean}
     * @instance
     */
    editOnKeydown: true,

    // TODO: remove this
    /**
     * @default
     * @type {boolean}
     */
    checkboxOnlyRowSelections: false,

    /** @summary Name of a formatter for cell text.
     * The default (`undefined`) falls back to `column.type`.
     * The value `null` does no formatting.
     * @default undefined
     * @type {undefined|null|string}
     * @tutorial localization
     */
    format: undefined,

    /** @summary Name of a cell editor from the {@link module:cellEditors|cellEditors API}..
     * @desc Not editable if named editor is does not exist.
     * @default undefined
     * @type {undefined|null|string}
     * @tutorial cell-editors
     */
    editor: undefined,

    /**
     * Name of cell renderer from the {@link module:cellRenderers|cellRenderers API}.
     * @default
     * @type {string}
     */
    renderer: 'SimpleCell',

    /********** HOVER COLORS **********/

    /** @typedef hoverColors
     * @property {boolean} [enable=false] - `false` means not hilite on hover
     * @property {cssColor} backgroundColor - cell, row, or column background color. Alpha channel will be respected and if given will be painted over the cells predetermined color.
     * @property {cssColor} [header.backgroundColor=backgroundColor] - for columns and rows, this is the background color of the column or row "handle" (header rows or columns, respectively). (Not used for cells.)
     */

    // TODO: remove this
    /** On mouse hover, whether to repaint the cell background and how.
     * @type {hoverColors}
     * @default '{ enabled: true, background: rgba(160, 160, 40, 0.30) }'
     */
    hoverCellHighlight: {
        enabled: false,
        backgroundColor: 'transparent'
    },

    // TODO: remove this
    /** On mouse hover, whether to repaint the row background and how.
     * @type {hoverColors}
     * @default '{ enabled: true, background: rgba(100, 100, 25, 0.15) }'
     */
    hoverRowHighlight: {
        enabled: false,
        backgroundColor: 'transparent'

    },

    // TODO: remove this
    /** On mouse hover, whether to repaint the column background and how.
     * @type {hoverColors}
     * @default '{ enabled: true, background: rgba(60, 60, 15, 0.15) }'
     */
    hoverColumnHighlight: {
        enabled: false,
        backgroundColor: 'transparent'
    },

    // TODO: remove this
    /** Display cell font with under-score line drawn over it.
     * > Implementation of links right now is not automatic; you must attach a 'fin-click' listener to the hypergrid object, etc.
     * @type {boolean}
     * @default
     */
    link: false,

    // TODO: remove this
    /** Display cell font with strike-through line drawn over it.
     * @type {boolean}
     * @default
     */
    strikeThrough: false,

    // TODO: remove this
    /** Ignore sort interaction (double-click).
     * @type {boolean}
     * @default
     */
    unsortable: true

};

/** @typedef {string} cssColor
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 */
/** @typedef {string} cssFont
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
 */

var textWidthCache = new LRUCache(2000);

function getTextWidth(gc, string) {
    if (string === null || string === undefined) {
        return 0;
    }
    string = string + '';
    if (string.length === 0) {
        return 0;
    }
    var key = gc.font + string;
    var width = textWidthCache.get(key);
    if (!width) {
        width = gc.measureText(string).width;
        textWidthCache.set(key, width);
    }
    return width;
}

var fontData = {};

function getTextHeight(font) {
    var result = fontData[font];

    if (!result) {
        result = {};

        var text = document.createElement('span');
        text.textContent = 'Hg';
        text.style.font = font;

        var block = document.createElement('div');
        block.style.display = 'inline-block';
        block.style.width = '1px';
        block.style.height = '0px';

        var div = document.createElement('div');
        div.appendChild(text);
        div.appendChild(block);

        div.style.position = 'absolute';
        document.body.appendChild(div);

        try {

            block.style.verticalAlign = 'baseline';

            var blockRect = block.getBoundingClientRect();
            var textRect = text.getBoundingClientRect();

            result.ascent = blockRect.top - textRect.top;

            block.style.verticalAlign = 'bottom';
            result.height = blockRect.top - textRect.top;

            result.descent = result.height - result.ascent;

        } finally {
            document.body.removeChild(div);
        }
        if (result.height !== 0) {
            fontData[font] = result;
        }
    }

    return result;
}
