
// ---- sap.ui.layout --------------------------------------------------------------------------


// ---- sap.ui.layout.BackgroundDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.BackgroundDesign.toString = function() { return ""; };

// ---- sap.ui.layout.BlockBackgroundType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.BlockBackgroundType.toString = function() { return ""; };

// ---- sap.ui.layout.BlockLayout --------------------------------------------------------------------------

/**
 * Constructor for a new BlockLayout.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getBackground background} : sap.ui.layout.BlockBackgroundType (default: Default)</li>
 * <li>{@link #getKeepFontSize keepFontSize} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.layout.BlockLayoutRow[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The BlockLayout is used to display several objects in a section-based manner.
 * <h3>Overview</h3>
 * The BlockLayout uses horizontal and vertical subdivisions, and full-width banners to display a set of elements.
 * By placing pictorial and textual elements side-by-side in different blocks, you can establish a visual connection between blocks and between similar elements.
 * <h3>Structure</h3>
 * The BlockLayout contains BlockLayout cells. Every cell consists of a title and content. The title can be text or a link.
 * 
 * Special full-width sections of the BlockLayout allow horizontal scrolling through a set of blocks.
 * 
 * The BlockLayout comes in five predefined types for background colors:
 * <ul>
 * <li>Layout only (default) - a layout scheme and no background colors</li>
 * <li>Light - a layout scheme with light colors</li>
 * <li>Accent - a layout scheme with 11 pre-defined color sets</li>
 * <li>Dashboard - a layout scheme with additional borders and no background colors</li>
 * </ul>
 * Background colors are attached directly to the blocks of the layout.
 * 
 * <b>Note:</b> With version 1.48 colors can be set for each individual {@link sap.ui.layout.BlockLayoutCell cell}. There are 11 pre-defined color sets, each with 4 different shades for the Belize theme and 6 different shades for the Fiori 3 theme.
 * The main colors of the sets can be changed in Theme Designer. To change the background of a particular cell, set <code>backgroundColorSet</code> (main color)
 * and <code>backgroundColorShade</code> (shade).
 * 
 * <b>Note:</b> Usage of disabled, emphasized or subtle links as titles is not recommended. Dark background designs, for example Accent, are not fully supported with regards to Аccessibility when used with links as titles.
 * 
 * <h3>Usage</h3>
 * <h4>When to use</h4>
 * <ul>
 * <li>You want to create a catalogue-like page with sections of blocks.</li>
 * <li>The BlockLayout is intended for developing administrative tools and applications.</li>
 * </ul>
 * <h4>When not to use</h4>
 * <ul>
 * <li>You want to display properties or features of one content item. Use a {@link sap.uxap.ObjectPageLayout object page} or {@link sap.f.DynamicPage dynamic page} instead.</li>
 * </ul>
 * <h3>Responsive Behavior</h3>
 * <ul>
 * <li>The breakpoints of the block layout react to the width of the control itself and not to the actual screen size.</li>
 * <li> On small screens all blocks will wrap to a single scrollable column</li>
 * </ul>
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.34
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/block-layout/ Block Layout}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.BlockLayout = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.layout.BlockLayoutRow}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.BlockLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.addContent = function(oContent) { return new sap.ui.layout.BlockLayout(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.layout.BlockLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.destroyContent = function() { return new sap.ui.layout.BlockLayout(); };

/**
 * Creates a new subclass of class sap.ui.layout.BlockLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackground background}.
 * 
 * Determines the background used for the Layout
 * 
 * Default value is <code>Default</code>.
 * @returns {sap.ui.layout.BlockBackgroundType} Value of property <code>background</code>
 * @since 1.42
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.getBackground = function() { return new sap.ui.layout.BlockBackgroundType(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The Rows to be included in the content of the control
 * 
 * @returns {sap.ui.layout.BlockLayoutRow[]}
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getKeepFontSize keepFontSize}.
 * 
 * Keeps the font-size of the contents as is, independent from the screen size.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>keepFontSize</code>
 * @since 1.52
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.getKeepFontSize = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.BlockLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.layout.BlockLayoutRow</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.BlockLayoutRow}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.layout.BlockLayoutRow}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.BlockLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.BlockLayout(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.layout.BlockLayoutRow[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.layout.BlockLayoutRow} vContent The content to remove or its index or id
 * @returns {sap.ui.layout.BlockLayoutRow} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.removeContent = function(vContent) { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Changes background type
 * 
 * @public
 * @param {string} sNewBackground Background's style of type sap.ui.layout.BlockBackgroundType
 * @returns {sap.ui.layout.BlockLayout} BlockLayout instance. Allows method chaining
 * 
 */
sap.ui.layout.BlockLayout.prototype.setBackground = function(sNewBackground) { return new sap.ui.layout.BlockLayout(); };

/**
 * Sets a new value for property {@link #getKeepFontSize keepFontSize}.
 * 
 * Keeps the font-size of the contents as is, independent from the screen size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bKeepFontSize New value for property <code>keepFontSize</code>
 * @returns {sap.ui.layout.BlockLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.setKeepFontSize = function(bKeepFontSize) { return new sap.ui.layout.BlockLayout(); };


// ---- sap.ui.layout.BlockLayoutCell --------------------------------------------------------------------------

/**
 * Constructor for a new BlockLayoutCell.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTitleAlignment titleAlignment} : sap.ui.core.HorizontalAlign (default: Begin)</li>
 * <li>{@link #getTitleLevel titleLevel} : sap.ui.core.TitleLevel (default: Auto)</li>
 * <li>{@link #getWidth width} : int (default: 0)</li>
 * <li>{@link #getBackgroundColorSet backgroundColorSet} : sap.ui.layout.BlockLayoutCellColorSet</li>
 * <li>{@link #getBackgroundColorShade backgroundColorShade} : sap.ui.layout.BlockLayoutCellColorShade</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getTitleLink titleLink} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The BlockLayoutCell is used as an aggregation of the BlockLayoutRow. It contains Controls.
 * The BlockLayoutCell should be used only as aggregation of the BlockLayoutRow.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.BlockLayoutCell = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.addContent = function(oContent) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.destroyContent = function() { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Destroys the titleLink in the aggregation {@link #getTitleLink titleLink}.
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.56
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.destroyTitleLink = function() { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Creates a new subclass of class sap.ui.layout.BlockLayoutCell with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayoutCell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackgroundColorSet backgroundColorSet}.
 * 
 * The Background color set from which the background color will be selected.
 * By using background colors from the predefined sets your colors could later be customized from the Theme Designer.
 * <b>Note:</b> backgroundColorSet should be used only in combination with backgroundColorShade.
 * 
 * @returns {sap.ui.layout.BlockLayoutCellColorSet} Value of property <code>backgroundColorSet</code>
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getBackgroundColorSet = function() { return new sap.ui.layout.BlockLayoutCellColorSet(); };

/**
 * Gets current value of property {@link #getBackgroundColorShade backgroundColorShade}.
 * 
 * The index of the background color in the color set from which the color will be selected.
 * By using background colors from the predefined sets your colors could later be customized from the Theme Designer.
 * <b>Note:</b> backgroundColorShade should be used only in combination with backgroundColorSet.
 * 
 * @returns {sap.ui.layout.BlockLayoutCellColorShade} Value of property <code>backgroundColorShade</code>
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getBackgroundColorShade = function() { return new sap.ui.layout.BlockLayoutCellColorShade(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content to be included inside the cell
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.BlockLayoutCell.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayoutCell.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Defines the title of the cell.
 * <b>Note:</b> When the <code>titleLink</code> aggregation is provided, the title of the cell will be replaced with the text from the <code>titleLink</code>.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTitleAlignment titleAlignment}.
 * 
 * Defines the alignment of the cell title
 * 
 * Default value is <code>Begin</code>.
 * @returns {sap.ui.core.HorizontalAlign} Value of property <code>titleAlignment</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getTitleAlignment = function() { return new sap.ui.core.HorizontalAlign(); };

/**
 * Gets current value of property {@link #getTitleLevel titleLevel}.
 * 
 * Defines the aria level of the title
 * This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.ui.core.TitleLevel} Value of property <code>titleLevel</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getTitleLevel = function() { return new sap.ui.core.TitleLevel(); };

/**
 * Gets content of aggregation {@link #getTitleLink titleLink}.
 * 
 * The link that will replace the title of the cell.
 * <b>Note:</b> The only possible value is the <code>sap.m.Link</code> control.
 * 
 * @returns {sap.ui.core.Control}
 * @since 1.56
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getTitleLink = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable,
 * or non scrollable row, this property is interpreted in two different ways.
 * If the cell is placed inside a scrollable row - this property defines the width of the cell in
 * percentages. If no value is provided - the default is 40%.
 * If the cell is placed inside a non scrollable row - this property defines the grow factor of the cell
 * compared to the whole row.
 * <b>For example:</b> If you have 2 cells, each with width of 1, this means that they should be of equal size,
 * and they need to fill the whole row. This results in 50% width for each cell. If you have 2 cells,
 * one with width of 1, the other with width of 3, this means that the whole row width is 4, so the first
 * cell will have a width of 25%, the second - 75%.
 * According to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in
 * you applications. For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getWidth = function() { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Control}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getBackgroundColorSet backgroundColorSet}.
 * 
 * The Background color set from which the background color will be selected.
 * By using background colors from the predefined sets your colors could later be customized from the Theme Designer.
 * <b>Note:</b> backgroundColorSet should be used only in combination with backgroundColorShade.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.layout.BlockLayoutCellColorSet} sBackgroundColorSet New value for property <code>backgroundColorSet</code>
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setBackgroundColorSet = function(sBackgroundColorSet) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Sets a new value for property {@link #getBackgroundColorShade backgroundColorShade}.
 * 
 * The index of the background color in the color set from which the color will be selected.
 * By using background colors from the predefined sets your colors could later be customized from the Theme Designer.
 * <b>Note:</b> backgroundColorShade should be used only in combination with backgroundColorSet.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.layout.BlockLayoutCellColorShade} sBackgroundColorShade New value for property <code>backgroundColorShade</code>
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setBackgroundColorShade = function(sBackgroundColorShade) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Defines the title of the cell.
 * <b>Note:</b> When the <code>titleLink</code> aggregation is provided, the title of the cell will be replaced with the text from the <code>titleLink</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setTitle = function(sTitle) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Sets a new value for property {@link #getTitleAlignment titleAlignment}.
 * 
 * Defines the alignment of the cell title
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Begin</code>.
 * @param {sap.ui.core.HorizontalAlign} sTitleAlignment New value for property <code>titleAlignment</code>
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setTitleAlignment = function(sTitleAlignment) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Sets a new value for property {@link #getTitleLevel titleLevel}.
 * 
 * Defines the aria level of the title
 * This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.ui.core.TitleLevel} sTitleLevel New value for property <code>titleLevel</code>
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setTitleLevel = function(sTitleLevel) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Sets the aggregated {@link #getTitleLink titleLink}.
 * @param {sap.ui.core.Control} oTitleLink The titleLink to set
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.56
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setTitleLink = function(oTitleLink) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Sets the Width.
 * 
 * @public
 * @param {number} iWidth value.
 * @returns {sap.ui.layout.BlockLayoutCell} this BlockLayoutCell reference for chaining.
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setWidth = function(iWidth) { return new sap.ui.layout.BlockLayoutCell(); };


// ---- sap.ui.layout.BlockLayoutCellColorSet --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.BlockLayoutCellColorSet.toString = function() { return ""; };

// ---- sap.ui.layout.BlockLayoutCellColorShade --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.BlockLayoutCellColorShade.toString = function() { return ""; };

// ---- sap.ui.layout.BlockLayoutCellData --------------------------------------------------------------------------

/**
 * Constructor for a new BlockLayoutCellData.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSSize sSize} : int (default: 1)</li>
 * <li>{@link #getMSize mSize} : int (default: 1)</li>
 * <li>{@link #getLSize lSize} : int (default: 1)</li>
 * <li>{@link #getXlSize xlSize} : int (default: 1)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Holds layout data for the BlockLayoutCells contents.
 * @extends sap.ui.core.LayoutData
 * @version 1.71.0
 * @constructor
 * @public
 * @since 1.50.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) design time metamodel
 * 
 */
sap.ui.layout.BlockLayoutCellData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.BlockLayoutCellData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayoutCellData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getLSize lSize}.
 * 
 * Sets the width of the cell for L size of the BlockLayout.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>lSize</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellData.prototype.getLSize = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.layout.BlockLayoutCellData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayoutCellData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMSize mSize}.
 * 
 * Sets the width of the cell for M size of the BlockLayout.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>mSize</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellData.prototype.getMSize = function() { return 0; };

/**
 * Gets current value of property {@link #getSSize sSize}.
 * 
 * Sets the width of the cell for S size of the BlockLayout.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>sSize</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellData.prototype.getSSize = function() { return 0; };

/**
 * Gets current value of property {@link #getXlSize xlSize}.
 * 
 * Sets the width of the cell for XL size of the BlockLayout.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>xlSize</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellData.prototype.getXlSize = function() { return 0; };

/**
 * Sets a new value for property {@link #getLSize lSize}.
 * 
 * Sets the width of the cell for L size of the BlockLayout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iLSize New value for property <code>lSize</code>
 * @returns {sap.ui.layout.BlockLayoutCellData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellData.prototype.setLSize = function(iLSize) { return new sap.ui.layout.BlockLayoutCellData(); };

/**
 * Sets a new value for property {@link #getMSize mSize}.
 * 
 * Sets the width of the cell for M size of the BlockLayout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iMSize New value for property <code>mSize</code>
 * @returns {sap.ui.layout.BlockLayoutCellData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellData.prototype.setMSize = function(iMSize) { return new sap.ui.layout.BlockLayoutCellData(); };

/**
 * Sets width of the cell to all sizes if the width is specified.
 * @param iValue
 * @public
 * @returns {sap.ui.layout.BlockLayoutCellData}
 * 
 */
sap.ui.layout.BlockLayoutCellData.prototype.setSize = function(iValue) { return new sap.ui.layout.BlockLayoutCellData(); };

/**
 * Sets a new value for property {@link #getSSize sSize}.
 * 
 * Sets the width of the cell for S size of the BlockLayout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iSSize New value for property <code>sSize</code>
 * @returns {sap.ui.layout.BlockLayoutCellData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellData.prototype.setSSize = function(iSSize) { return new sap.ui.layout.BlockLayoutCellData(); };

/**
 * Sets a new value for property {@link #getXlSize xlSize}.
 * 
 * Sets the width of the cell for XL size of the BlockLayout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iXlSize New value for property <code>xlSize</code>
 * @returns {sap.ui.layout.BlockLayoutCellData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellData.prototype.setXlSize = function(iXlSize) { return new sap.ui.layout.BlockLayoutCellData(); };


// ---- sap.ui.layout.BlockLayoutRow --------------------------------------------------------------------------

/**
 * Constructor for a new BlockLayoutRow.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getScrollable scrollable} : boolean (default: false)</li>
 * <li>{@link #getRowColorSet rowColorSet} : sap.ui.layout.BlockRowColorSets</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.layout.BlockLayoutCell[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAccentCells accentCells} : (sap.ui.core.ID | sap.ui.layout.BlockLayoutCell)[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The BlockLayoutRow is used as an aggregation to the BlockLayout. It aggregates Block Layout  cells.
 * The BlockLayoutRow has 2 rendering modes - scrollable and non scrollable.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.BlockLayoutRow = function(sId,mSettings) {};
/**
 * Adds some accentCell into the association {@link #getAccentCells accentCells}.
 * 
 * @param {sap.ui.core.ID | sap.ui.layout.BlockLayoutCell} vAccentCell The accentCells to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.BlockLayoutRow} Reference to <code>this</code> in order to allow method chaining
 * @since 1.42
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.addAccentCell = function(vAccentCell) { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.layout.BlockLayoutCell}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.BlockLayoutRow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.addContent = function(oContent) { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.layout.BlockLayoutRow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.destroyContent = function() { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Creates a new subclass of class sap.ui.layout.BlockLayoutRow with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayoutRow.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAccentCells accentCells}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.42
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.getAccentCells = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content cells to be included in the row.
 * 
 * @returns {sap.ui.layout.BlockLayoutCell[]}
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.BlockLayoutRow.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayoutRow.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getRowColorSet rowColorSet}.
 * 
 * Defines background type for that row.
 * There might be several rows with the same type
 * 
 * @returns {sap.ui.layout.BlockRowColorSets} Value of property <code>rowColorSet</code>
 * @since 1.42
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.getRowColorSet = function() { return new sap.ui.layout.BlockRowColorSets(); };

/**
 * Gets current value of property {@link #getScrollable scrollable}.
 * 
 * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get
 * aligned side by side, with horizontal scroll bar for the row.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>scrollable</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.getScrollable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.layout.BlockLayoutCell</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.BlockLayoutCell}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.layout.BlockLayoutCell}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.BlockLayoutRow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Removes an accentCell from the association named {@link #getAccentCells accentCells}.
 * @param {int | sap.ui.core.ID | sap.ui.layout.BlockLayoutCell} vAccentCell The accentCell to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed accentCell or <code>null</code>
 * @since 1.42
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.removeAccentCell = function(vAccentCell) { return new sap.ui.core.ID(); };

/**
 * Removes all the controls in the association named {@link #getAccentCells accentCells}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.42
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.removeAllAccentCells = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.layout.BlockLayoutCell[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.layout.BlockLayoutCell} vContent The content to remove or its index or id
 * @returns {sap.ui.layout.BlockLayoutCell} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.removeContent = function(vContent) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Changes dynamically row color set
 * Note: this might invalidate cells inside and also change color sets of the other BlockLayoutRow-s below it.
 * @public
 * @method
 * @param {sap.ui.layout.BlockRowColorSets} sType
 * @since 1.42
 * @returns {sap.ui.layout.BlockLayoutRow}
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.setRowColorSet = function(sType) { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Sets a new value for property {@link #getScrollable scrollable}.
 * 
 * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get
 * aligned side by side, with horizontal scroll bar for the row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bScrollable New value for property <code>scrollable</code>
 * @returns {sap.ui.layout.BlockLayoutRow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.setScrollable = function(bScrollable) { return new sap.ui.layout.BlockLayoutRow(); };


// ---- sap.ui.layout.BlockRowColorSets --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.BlockRowColorSets.toString = function() { return ""; };

// ---- sap.ui.layout.BoxesPerRowConfig --------------------------------------------------------------------------


// ---- sap.ui.layout.cssgrid.CSSGrid --------------------------------------------------------------------------

/**
 * Constructor for a new CSSGrid.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getGridTemplateColumns gridTemplateColumns} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridTemplateRows gridTemplateRows} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridRowGap gridRowGap} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getGridColumnGap gridColumnGap} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getGridGap gridGap} : sap.ui.layout.cssgrid.CSSGridGapShortHand (default: )</li>
 * <li>{@link #getGridAutoRows gridAutoRows} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridAutoColumns gridAutoColumns} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridAutoFlow gridAutoFlow} : sap.ui.layout.cssgrid.CSSGridAutoFlow (default: Row)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomLayout customLayout} : sap.ui.layout.cssgrid.GridLayoutBase</li>
 * <li>{@link #getItems items} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A layout control, used to create full page layouts or user interface elements.
 * 
 * <h3>Overview</h3>
 * 
 * A two-dimensional layout control based on the native-browser CSS display grid which can handle both columns and rows.
 * The control can be used along with {@link sap.m.FlexBox} which is the one-dimensional alternative for layouting.
 * 
 * With properties it is possible to define:
 * <ul>
 * <li>columns, rows and their sizes in the grid</li>
 * <li>vertical and horizontal gaps between the grid items</li>
 * <li>the flow algorithm when new items are added in the grid</li>
 * </ul>
 * 
 * The dimensions of the grid items are defined on a <code>CSSGrid</code> level. Every item can override its size by
 * specifying how many columns and/or rows it will take in the <code>CSSGrid</code>. Every item can override its position
 * by specifying from which column and/or row it will start. The configuration of a single item is done
 * with {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}.
 * 
 * <h3>Terminology</h3>
 * <ul>
 * <li>Grid - The container which has all grid settings</li>
 * <li>Gutters - The gap between the rows and columns</li>
 * <li>Grid areas - Items that take more than one row and/or column</li>
 * <li>Grid cells - The items of the Grid</li>
 * <li>Grid lines - The lines around and between the rows and columns</li>
 * <li>Grid tracks - The space between any two lines in the grid</li>
 * <li>"fr" Unit - A special grid unit (short from "fraction") which represents a fraction of the available space in the grid</li>
 * <li>Implicit and Explicit grid - Explicit grid consists of rows and columns defined with <code>gridTemplateColumns</code> and <code>gridTemplateRows</code>. The grid
 * also creates rows and columns on its own when needed. Their dimensions are defined with <code>gridAutoColumns</code> and <code>gridAutoRows</code>.</li>
 * </ul>
 * 
 * <h3>Structure</h3>
 * The <code>CSSGrid</code> has the following elements:
 * <ul>
 * <li><code>items</code> - The items of the <code>CSSGrid</code></li>
 * <li><code>customLayout</code> - An aggregation used to pass the <code>CSSGrid</code> configuration. Used for templating.</li>
 * </ul>
 * 
 * <h3>Usage</h3>
 * 
 * For general cases, use the <code>CSSGrid</code> properties to configure how the layout should look.
 * For Box case (equal sized items), use <code>customLayout</code> aggregation with {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout}
 * For Grids which need different configurations based on available width, use <code>customLayout</code> aggregation with {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout}
 * To set a specific position to an item or define its dimensions in the grid, pass <code>layoutData</code> of type {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}
 * 
 * <i>When to use</i>
 * <ul>
 * <li>If a two-dimensional layout configuration is needed (both columns and rows are defined)</li>
 * </ul>
 * 
 * <i>When not to use</i>
 * <ul>
 * <li>If the layout needs to be defined only by one dimension (either column or row, not both). Use {@link sap.m.FlexBox FlexBox} instead.</li>
 * </ul>
 * 
 * <h3>Responsive behavior</h3>
 * <ul>
 * <li>Fully configurable by the developer. It is possible to create a "breathing" columns layout which means columns width will grow/shrink depending on grid size.</li>
 * <li>It is possible to pass a {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} to the <code>customLayout</code> aggregation of
 * the <code>CSSGrid</code> and configure how it will look in different breakpoints (S, M, L, XL).</li>
 * </ul>
 * 
 * <h3>Current Limitations</h3>
 * <ul>
 * <li>No support for IE11.</li>
 * <li>No support for Edge version 15.</li>
 * <li>No alignment and ordering</li>
 * <li>No Named grid areas and lines</li>
 * </ul>
 * 
 * @see {@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs: CSS Grid Layout}
 * @version 1.71.0
 * 
 * @extends sap.ui.core.Control
 * @implements sap.ui.layout.cssgrid.IGridConfigurable
 * 
 * @since 1.60
 * @constructor
 * @public
 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.cssgrid.CSSGrid = function(sId,mSettings) {};
/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.ui.core.Control}
 *            oItem The item to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.addItem = function(oItem) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Destroys the customLayout in the aggregation {@link #getCustomLayout customLayout}.
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.destroyCustomLayout = function() { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.destroyItems = function() { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Creates a new subclass of class sap.ui.layout.cssgrid.CSSGrid with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getCustomLayout customLayout}.
 * 
 * Defines a custom Grid layout for the control. If provided, it will override all of the grid properties.
 * 
 * @returns {sap.ui.layout.cssgrid.GridLayoutBase}
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getCustomLayout = function() { return new sap.ui.layout.cssgrid.GridLayoutBase(); };

/**
 * Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridAutoColumns</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getGridAutoColumns = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>Row</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridAutoFlow} Value of property <code>gridAutoFlow</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getGridAutoFlow = function() { return new sap.ui.layout.cssgrid.CSSGridAutoFlow(); };

/**
 * Gets current value of property {@link #getGridAutoRows gridAutoRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridAutoRows</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getGridAutoRows = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets current value of property {@link #getGridColumnGap gridColumnGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>gridColumnGap</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getGridColumnGap = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getGridGap gridGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}
 * It is a shorthand for gridRowGap and gridColumnGap. If some of them is set, the gridGap value will have less priority and will be overwritten.
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridGapShortHand} Value of property <code>gridGap</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getGridGap = function() { return new sap.ui.layout.cssgrid.CSSGridGapShortHand(); };

/**
 * Gets current value of property {@link #getGridRowGap gridRowGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>gridRowGap</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getGridRowGap = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridTemplateColumns</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getGridTemplateColumns = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridTemplateRows</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getGridTemplateRows = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * The items contained by the control.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.cssgrid.CSSGrid.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the control
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.ui.core.Control}
 *            oItem The item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.ui.core.Control} vItem The item to remove or its index or id
 * @returns {sap.ui.core.Control} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.removeItem = function(vItem) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated {@link #getCustomLayout customLayout}.
 * @param {sap.ui.layout.cssgrid.GridLayoutBase} oCustomLayout The customLayout to set
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setCustomLayout = function(oCustomLayout) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoColumns New value for property <code>gridAutoColumns</code>
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setGridAutoColumns = function(sGridAutoColumns) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Row</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridAutoFlow} sGridAutoFlow New value for property <code>gridAutoFlow</code>
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setGridAutoFlow = function(sGridAutoFlow) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Sets a new value for property {@link #getGridAutoRows gridAutoRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoRows New value for property <code>gridAutoRows</code>
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setGridAutoRows = function(sGridAutoRows) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Sets a new value for property {@link #getGridColumnGap gridColumnGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.CSSSize} sGridColumnGap New value for property <code>gridColumnGap</code>
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setGridColumnGap = function(sGridColumnGap) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Sets a new value for property {@link #getGridGap gridGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}
 * It is a shorthand for gridRowGap and gridColumnGap. If some of them is set, the gridGap value will have less priority and will be overwritten.
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridGapShortHand} sGridGap New value for property <code>gridGap</code>
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setGridGap = function(sGridGap) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Sets a new value for property {@link #getGridRowGap gridRowGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.CSSSize} sGridRowGap New value for property <code>gridRowGap</code>
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setGridRowGap = function(sGridRowGap) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateColumns New value for property <code>gridTemplateColumns</code>
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setGridTemplateColumns = function(sGridTemplateColumns) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateRows New value for property <code>gridTemplateRows</code>
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setGridTemplateRows = function(sGridTemplateRows) { return new sap.ui.layout.cssgrid.CSSGrid(); };

/**
 * Sets the width of the grid.
 * @param {sap.ui.core.CSSSize} sWidth The width of the Grid as CSS size.
 * @returns {sap.ui.layout.cssgrid.CSSGrid} Pointer to the control instance to allow method chaining.
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGrid.prototype.setWidth = function(sWidth) { return new sap.ui.layout.cssgrid.CSSGrid(); };


// ---- sap.ui.layout.cssgrid.CSSGridAutoFlow --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.cssgrid.CSSGridAutoFlow.toString = function() { return ""; };

// ---- sap.ui.layout.cssgrid.CSSGridGapShortHand --------------------------------------------------------------------------


// ---- sap.ui.layout.cssgrid.CSSGridLine --------------------------------------------------------------------------


// ---- sap.ui.layout.cssgrid.CSSGridTrack --------------------------------------------------------------------------


// ---- sap.ui.layout.cssgrid.GridBasicLayout --------------------------------------------------------------------------

/**
 * Constructor for a new GridBasicLayout.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getGridTemplateColumns gridTemplateColumns} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridTemplateRows gridTemplateRows} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridRowGap gridRowGap} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getGridColumnGap gridColumnGap} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getGridGap gridGap} : sap.ui.layout.cssgrid.CSSGridGapShortHand (default: )</li>
 * <li>{@link #getGridAutoRows gridAutoRows} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridAutoColumns gridAutoColumns} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridAutoFlow gridAutoFlow} : sap.ui.layout.cssgrid.CSSGridAutoFlow (default: Row)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.cssgrid.GridLayoutBase#constructor sap.ui.layout.cssgrid.GridLayoutBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.
 * @version 1.71.0
 * 
 * @extends sap.ui.layout.cssgrid.GridLayoutBase
 * 
 * @since 1.60
 * @constructor
 * @public
 * @ui5-metamodel This simple type will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.cssgrid.GridBasicLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.cssgrid.GridLayoutBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridAutoColumns</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.getGridAutoColumns = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>Row</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridAutoFlow} Value of property <code>gridAutoFlow</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.getGridAutoFlow = function() { return new sap.ui.layout.cssgrid.CSSGridAutoFlow(); };

/**
 * Gets current value of property {@link #getGridAutoRows gridAutoRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridAutoRows</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.getGridAutoRows = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets current value of property {@link #getGridColumnGap gridColumnGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>gridColumnGap</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.getGridColumnGap = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getGridGap gridGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridGapShortHand} Value of property <code>gridGap</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.getGridGap = function() { return new sap.ui.layout.cssgrid.CSSGridGapShortHand(); };

/**
 * Gets current value of property {@link #getGridRowGap gridRowGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>gridRowGap</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.getGridRowGap = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridTemplateColumns</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.getGridTemplateColumns = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridTemplateRows</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.getGridTemplateRows = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Returns a metadata object for class sap.ui.layout.cssgrid.GridBasicLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoColumns New value for property <code>gridAutoColumns</code>
 * @returns {sap.ui.layout.cssgrid.GridBasicLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.setGridAutoColumns = function(sGridAutoColumns) { return new sap.ui.layout.cssgrid.GridBasicLayout(); };

/**
 * Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Row</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridAutoFlow} sGridAutoFlow New value for property <code>gridAutoFlow</code>
 * @returns {sap.ui.layout.cssgrid.GridBasicLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.setGridAutoFlow = function(sGridAutoFlow) { return new sap.ui.layout.cssgrid.GridBasicLayout(); };

/**
 * Sets a new value for property {@link #getGridAutoRows gridAutoRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoRows New value for property <code>gridAutoRows</code>
 * @returns {sap.ui.layout.cssgrid.GridBasicLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.setGridAutoRows = function(sGridAutoRows) { return new sap.ui.layout.cssgrid.GridBasicLayout(); };

/**
 * Sets a new value for property {@link #getGridColumnGap gridColumnGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.CSSSize} sGridColumnGap New value for property <code>gridColumnGap</code>
 * @returns {sap.ui.layout.cssgrid.GridBasicLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.setGridColumnGap = function(sGridColumnGap) { return new sap.ui.layout.cssgrid.GridBasicLayout(); };

/**
 * Sets a new value for property {@link #getGridGap gridGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridGapShortHand} sGridGap New value for property <code>gridGap</code>
 * @returns {sap.ui.layout.cssgrid.GridBasicLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.setGridGap = function(sGridGap) { return new sap.ui.layout.cssgrid.GridBasicLayout(); };

/**
 * Sets a new value for property {@link #getGridRowGap gridRowGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.CSSSize} sGridRowGap New value for property <code>gridRowGap</code>
 * @returns {sap.ui.layout.cssgrid.GridBasicLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.setGridRowGap = function(sGridRowGap) { return new sap.ui.layout.cssgrid.GridBasicLayout(); };

/**
 * Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateColumns New value for property <code>gridTemplateColumns</code>
 * @returns {sap.ui.layout.cssgrid.GridBasicLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.setGridTemplateColumns = function(sGridTemplateColumns) { return new sap.ui.layout.cssgrid.GridBasicLayout(); };

/**
 * Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateRows New value for property <code>gridTemplateRows</code>
 * @returns {sap.ui.layout.cssgrid.GridBasicLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBasicLayout.prototype.setGridTemplateRows = function(sGridTemplateRows) { return new sap.ui.layout.cssgrid.GridBasicLayout(); };


// ---- sap.ui.layout.cssgrid.GridBoxLayout --------------------------------------------------------------------------

/**
 * Constructor for a new GridBoxLayout.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getBoxMinWidth boxMinWidth} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getBoxWidth boxWidth} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getBoxesPerRowConfig boxesPerRowConfig} : sap.ui.layout.BoxesPerRowConfig (default: XL7 L6 M4 S2)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.cssgrid.GridLayoutBase#constructor sap.ui.layout.cssgrid.GridLayoutBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.
 * @version 1.71.0
 * 
 * @extends sap.ui.layout.cssgrid.GridLayoutBase
 * 
 * @since 1.60
 * @constructor
 * @public
 * @ui5-metamodel This simple type will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout = function(sId,mSettings) {};
/**
 * Apply display:grid styles to the provided HTML element or control based on the currently active GridSettings
 * 
 * @protected
 * @param {sap.ui.core.Control|HTMLElement} oElement The element or control on which to apply the display:grid styles
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype._applySingleGridLayout = function(oElement) {  };

/**
 * Returns a gridTemplateColumns value based on boxWidth and boxMinWidth properties
 * 
 * @protected
 * @returns {string} A value for gridTemplateColumns property
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype._getTemplateColumns = function() { return ""; };

/**
 * Implements polyfill for IE after drag end.
 * @param {Object} oEvent After drag end event
 * @protected
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype._polyfillAfterDragEnd = function(oEvent) {  };

/**
 * Implements polyfill for IE after drag over.
 * @param {Object} oEvent After drag over event
 * @protected
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype._polyfillAfterDragOver = function(oEvent) {  };

/**
 * Sets all display:grid styles to the provided HTML element
 * 
 * @protected
 * @param {HTMLElement} oElement The element to which to apply the grid styles
 * @param {sap.ui.layout.cssgrid.GridSettings} oGridSettings The grid settings to apply
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype._setGridLayout = function(oElement,oGridSettings) {  };

/**
 * Creates a new subclass of class sap.ui.layout.cssgrid.GridBoxLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.cssgrid.GridLayoutBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBoxesPerRowConfig boxesPerRowConfig}.
 * 
 * A string type that defines number of Boxes per row for extra large, large, medium and small screens
 * 
 * Default value is <code>XL7 L6 M4 S2</code>.
 * @returns {sap.ui.layout.BoxesPerRowConfig} Value of property <code>boxesPerRowConfig</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype.getBoxesPerRowConfig = function() { return new sap.ui.layout.BoxesPerRowConfig(); };

/**
 * Gets current value of property {@link #getBoxMinWidth boxMinWidth}.
 * 
 * Defines the minimum width of the Boxes
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>boxMinWidth</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype.getBoxMinWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getBoxWidth boxWidth}.
 * 
 * Defines the width of the Boxes
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>boxWidth</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype.getBoxWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.layout.cssgrid.GridBoxLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * @public
 * @returns {boolean} If the Grid Layout is responsive.
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype.isResponsive = function() { return false; };

/**
 * Sets a new value for property {@link #getBoxesPerRowConfig boxesPerRowConfig}.
 * 
 * A string type that defines number of Boxes per row for extra large, large, medium and small screens
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>XL7 L6 M4 S2</code>.
 * @param {sap.ui.layout.BoxesPerRowConfig} sBoxesPerRowConfig New value for property <code>boxesPerRowConfig</code>
 * @returns {sap.ui.layout.cssgrid.GridBoxLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype.setBoxesPerRowConfig = function(sBoxesPerRowConfig) { return new sap.ui.layout.cssgrid.GridBoxLayout(); };

/**
 * Sets a new value for property {@link #getBoxMinWidth boxMinWidth}.
 * 
 * Defines the minimum width of the Boxes
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.CSSSize} sBoxMinWidth New value for property <code>boxMinWidth</code>
 * @returns {sap.ui.layout.cssgrid.GridBoxLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype.setBoxMinWidth = function(sBoxMinWidth) { return new sap.ui.layout.cssgrid.GridBoxLayout(); };

/**
 * Sets a new value for property {@link #getBoxWidth boxWidth}.
 * 
 * Defines the width of the Boxes
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.CSSSize} sBoxWidth New value for property <code>boxWidth</code>
 * @returns {sap.ui.layout.cssgrid.GridBoxLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridBoxLayout.prototype.setBoxWidth = function(sBoxWidth) { return new sap.ui.layout.cssgrid.GridBoxLayout(); };


// ---- sap.ui.layout.cssgrid.GridItemLayoutData --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.ui.layout.cssgrid.GridItemLayoutData</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getGridColumnStart gridColumnStart} : sap.ui.layout.cssgrid.CSSGridLine (default: )</li>
 * <li>{@link #getGridColumnEnd gridColumnEnd} : sap.ui.layout.cssgrid.CSSGridLine (default: )</li>
 * <li>{@link #getGridRowStart gridRowStart} : sap.ui.layout.cssgrid.CSSGridLine (default: )</li>
 * <li>{@link #getGridRowEnd gridRowEnd} : sap.ui.layout.cssgrid.CSSGridLine (default: )</li>
 * <li>{@link #getGridColumn gridColumn} : sap.ui.layout.cssgrid.CSSGridLine (default: )</li>
 * <li>{@link #getGridRow gridRow} : sap.ui.layout.cssgrid.CSSGridLine (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new element, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new element.
 * 
 * @class
 * Holds layout data for a grid item.
 * 
 * @extends sap.ui.core.LayoutData
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.cssgrid.GridItemLayoutData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getGridColumn gridColumn}.
 * 
 * Sets the value for the CSS display:grid item property grid-column
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column MDN web docs: grid-column}
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridLine} Value of property <code>gridColumn</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.getGridColumn = function() { return new sap.ui.layout.cssgrid.CSSGridLine(); };

/**
 * Gets current value of property {@link #getGridColumnEnd gridColumnEnd}.
 * 
 * Sets the value for the CSS display:grid item property grid-column-end
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end MDN web docs: grid-column-end}
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridLine} Value of property <code>gridColumnEnd</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.getGridColumnEnd = function() { return new sap.ui.layout.cssgrid.CSSGridLine(); };

/**
 * Gets current value of property {@link #getGridColumnStart gridColumnStart}.
 * 
 * Sets the value for the CSS display:grid item property grid-column-start
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start MDN web docs: grid-column-start}
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridLine} Value of property <code>gridColumnStart</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.getGridColumnStart = function() { return new sap.ui.layout.cssgrid.CSSGridLine(); };

/**
 * Gets current value of property {@link #getGridRow gridRow}.
 * 
 * Sets the value for the CSS display:grid item property grid-row
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row MDN web docs: grid-row}
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridLine} Value of property <code>gridRow</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.getGridRow = function() { return new sap.ui.layout.cssgrid.CSSGridLine(); };

/**
 * Gets current value of property {@link #getGridRowEnd gridRowEnd}.
 * 
 * Sets the value for the CSS display:grid item property grid-row-end
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end MDN web docs: grid-row-end}
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridLine} Value of property <code>gridRowEnd</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.getGridRowEnd = function() { return new sap.ui.layout.cssgrid.CSSGridLine(); };

/**
 * Gets current value of property {@link #getGridRowStart gridRowStart}.
 * 
 * Sets the value for the CSS display:grid item property grid-row-start
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start MDN web docs: grid-row-start}
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridLine} Value of property <code>gridRowStart</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.getGridRowStart = function() { return new sap.ui.layout.cssgrid.CSSGridLine(); };

/**
 * Returns a metadata object for class sap.ui.layout.cssgrid.GridItemLayoutData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getGridColumn gridColumn}.
 * 
 * Sets the value for the CSS display:grid item property grid-column
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column MDN web docs: grid-column}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridColumn New value for property <code>gridColumn</code>
 * @returns {sap.ui.layout.cssgrid.GridItemLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.setGridColumn = function(sGridColumn) { return new sap.ui.layout.cssgrid.GridItemLayoutData(); };

/**
 * Sets a new value for property {@link #getGridColumnEnd gridColumnEnd}.
 * 
 * Sets the value for the CSS display:grid item property grid-column-end
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end MDN web docs: grid-column-end}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridColumnEnd New value for property <code>gridColumnEnd</code>
 * @returns {sap.ui.layout.cssgrid.GridItemLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.setGridColumnEnd = function(sGridColumnEnd) { return new sap.ui.layout.cssgrid.GridItemLayoutData(); };

/**
 * Sets a new value for property {@link #getGridColumnStart gridColumnStart}.
 * 
 * Sets the value for the CSS display:grid item property grid-column-start
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start MDN web docs: grid-column-start}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridColumnStart New value for property <code>gridColumnStart</code>
 * @returns {sap.ui.layout.cssgrid.GridItemLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.setGridColumnStart = function(sGridColumnStart) { return new sap.ui.layout.cssgrid.GridItemLayoutData(); };

/**
 * Sets a new value for property {@link #getGridRow gridRow}.
 * 
 * Sets the value for the CSS display:grid item property grid-row
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row MDN web docs: grid-row}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridRow New value for property <code>gridRow</code>
 * @returns {sap.ui.layout.cssgrid.GridItemLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.setGridRow = function(sGridRow) { return new sap.ui.layout.cssgrid.GridItemLayoutData(); };

/**
 * Sets a new value for property {@link #getGridRowEnd gridRowEnd}.
 * 
 * Sets the value for the CSS display:grid item property grid-row-end
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end MDN web docs: grid-row-end}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridRowEnd New value for property <code>gridRowEnd</code>
 * @returns {sap.ui.layout.cssgrid.GridItemLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.setGridRowEnd = function(sGridRowEnd) { return new sap.ui.layout.cssgrid.GridItemLayoutData(); };

/**
 * Sets a new value for property {@link #getGridRowStart gridRowStart}.
 * 
 * Sets the value for the CSS display:grid item property grid-row-start
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start MDN web docs: grid-row-start}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridRowStart New value for property <code>gridRowStart</code>
 * @returns {sap.ui.layout.cssgrid.GridItemLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridItemLayoutData.prototype.setGridRowStart = function(sGridRowStart) { return new sap.ui.layout.cssgrid.GridItemLayoutData(); };


// ---- sap.ui.layout.cssgrid.GridLayoutBase --------------------------------------------------------------------------

/**
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * This class does not have its own settings, but all settings applicable to the base type
 * {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject} can be used.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.
 * @version 1.71.0
 * 
 * @extends sap.ui.base.ManagedObject
 * 
 * @since 1.60
 * @abstract
 * @constructor
 * @public
 * @ui5-metamodel This simple type will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase = function(sId,mSettings) {};
/**
 * Apply display:grid styles to the provided HTML element or control based on the currently active GridSettings
 * 
 * @protected
 * @param {sap.ui.core.Control|HTMLElement} oElement The element or control on which to apply the display:grid styles
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase.prototype._applySingleGridLayout = function(oElement) {  };

/**
 * Removes all display:grid styles from the provided HTML element
 * 
 * @protected
 * @param {HTMLElement} oElement The element from which to remove the grid styles
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase.prototype._removeGridLayout = function(oElement) {  };

/**
 * Sets all display:grid styles to the provided HTML element
 * 
 * @protected
 * @param {HTMLElement} oElement The element to which to apply the grid styles
 * @param {sap.ui.layout.cssgrid.GridSettings} oGridSettings The grid settings to apply
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase.prototype._setGridLayout = function(oElement,oGridSettings) {  };

/**
 * Apply display:grid styles to the provided array of HTML elements or controls based on the currently active GridSettings
 * 
 * @public
 * @param {sap.ui.core.Control[]|HTMLElement[]} aElements The elements or controls on which to apply the display:grid styles
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase.prototype.applyGridLayout = function(aElements) {  };

/**
 * Creates a new subclass of class sap.ui.layout.cssgrid.GridLayoutBase with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Should return sap.ui.layout.cssgrid.GridSettings - The active GridSettings
 * Must be implemented by child classes
 * @abstract
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase.prototype.getActiveGridSettings = function() {  };

/**
 * Returns a metadata object for class sap.ui.layout.cssgrid.GridLayoutBase.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * @public
 * @returns {boolean} If native grid is supported by the browser
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase.prototype.isGridSupportedByBrowser = function() { return false; };

/**
 * @public
 * @virtual
 * @returns {boolean} If the Grid Layout is responsive.
 * 
 */
sap.ui.layout.cssgrid.GridLayoutBase.prototype.isResponsive = function() { return false; };


// ---- sap.ui.layout.cssgrid.GridLayoutDelegate --------------------------------------------------------------------------

/**
 * 
 * @class
 * Add handlers for a sap.ui.layout.cssgrid.IGridConfigurable control lifecycle events.
 * Applies the grid layout when necessary.
 * Calls sap.ui.layout.cssgrid.GridLayoutBase hook functions.
 * 
 * @extends sap.ui.base.Object
 * 
 * @version 1.71.0
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridLayoutDelegate = function() {};

// ---- sap.ui.layout.cssgrid.GridResponsiveLayout --------------------------------------------------------------------------

/**
 * Constructor for a new GridResponsiveLayout.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getContainerQuery containerQuery} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLayout layout} : sap.ui.layout.cssgrid.GridSettings</li>
 * <li>{@link #getLayoutS layoutS} : sap.ui.layout.cssgrid.GridSettings</li>
 * <li>{@link #getLayoutM layoutM} : sap.ui.layout.cssgrid.GridSettings</li>
 * <li>{@link #getLayoutL layoutL} : sap.ui.layout.cssgrid.GridSettings</li>
 * <li>{@link #getLayoutXL layoutXL} : sap.ui.layout.cssgrid.GridSettings</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:layoutChange layoutChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.cssgrid.GridLayoutBase#constructor sap.ui.layout.cssgrid.GridLayoutBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.
 * Have to possibility to hold multiple sap.ui.layout.cssgrid.GridSettings and apply the currently active GridSettings.
 * @version 1.71.0
 * 
 * @extends sap.ui.layout.cssgrid.GridLayoutBase
 * 
 * @since 1.60
 * @constructor
 * @public
 * @ui5-metamodel This simple type will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout = function(sId,mSettings) {};
/**
 * Fired when the currently active GridSettings changes
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.layout The name of the newly active layout aggregation
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.layoutChange = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:layoutChange layoutChange} event of this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code> itself.
 * 
 * Fired when the currently active GridSettings changes
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code> itself
 * 
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.attachLayoutChange = function(oData,fnFunction,oListener) { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Destroys the layout in the aggregation {@link #getLayout layout}.
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.destroyLayout = function() { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Destroys the layoutL in the aggregation {@link #getLayoutL layoutL}.
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.destroyLayoutL = function() { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Destroys the layoutM in the aggregation {@link #getLayoutM layoutM}.
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.destroyLayoutM = function() { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Destroys the layoutS in the aggregation {@link #getLayoutS layoutS}.
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.destroyLayoutS = function() { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Destroys the layoutXL in the aggregation {@link #getLayoutXL layoutXL}.
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.destroyLayoutXL = function() { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:layoutChange layoutChange} event of this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.detachLayoutChange = function(fnFunction,oListener) { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Creates a new subclass of class sap.ui.layout.cssgrid.GridResponsiveLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.cssgrid.GridLayoutBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:layoutChange layoutChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.layout] The name of the newly active layout aggregation
 * 
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.fireLayoutChange = function(mParameters) { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Gets current value of property {@link #getContainerQuery containerQuery}.
 * 
 * If set to <code>true</code>, the current range (large, medium or small) is defined by the size of the
 * container surrounding the <code>CSSGrid</code> instead of the device screen size (media Query).
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>containerQuery</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.getContainerQuery = function() { return false; };

/**
 * Gets content of aggregation {@link #getLayout layout}.
 * 
 * The sap.ui.layout.cssgrid.GridSettings applied if no settings are provided for a specific size
 * 
 * @returns {sap.ui.layout.cssgrid.GridSettings}
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.getLayout = function() { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Gets content of aggregation {@link #getLayoutL layoutL}.
 * 
 * The sap.ui.layout.cssgrid.GridSettings applied for size "L"
 * 
 * @returns {sap.ui.layout.cssgrid.GridSettings}
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.getLayoutL = function() { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Gets content of aggregation {@link #getLayoutM layoutM}.
 * 
 * The sap.ui.layout.cssgrid.GridSettings applied for size "M"
 * 
 * @returns {sap.ui.layout.cssgrid.GridSettings}
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.getLayoutM = function() { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Gets content of aggregation {@link #getLayoutS layoutS}.
 * 
 * The sap.ui.layout.cssgrid.GridSettings applied for size "S"
 * 
 * @returns {sap.ui.layout.cssgrid.GridSettings}
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.getLayoutS = function() { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Gets content of aggregation {@link #getLayoutXL layoutXL}.
 * 
 * The sap.ui.layout.cssgrid.GridSettings applied for size "XL"
 * 
 * @returns {sap.ui.layout.cssgrid.GridSettings}
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.getLayoutXL = function() { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Returns a metadata object for class sap.ui.layout.cssgrid.GridResponsiveLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getContainerQuery containerQuery}.
 * 
 * If set to <code>true</code>, the current range (large, medium or small) is defined by the size of the
 * container surrounding the <code>CSSGrid</code> instead of the device screen size (media Query).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bContainerQuery New value for property <code>containerQuery</code>
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.setContainerQuery = function(bContainerQuery) { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Sets the aggregated {@link #getLayout layout}.
 * @param {sap.ui.layout.cssgrid.GridSettings} oLayout The layout to set
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.setLayout = function(oLayout) { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Sets the aggregated {@link #getLayoutL layoutL}.
 * @param {sap.ui.layout.cssgrid.GridSettings} oLayoutL The layoutL to set
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.setLayoutL = function(oLayoutL) { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Sets the aggregated {@link #getLayoutM layoutM}.
 * @param {sap.ui.layout.cssgrid.GridSettings} oLayoutM The layoutM to set
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.setLayoutM = function(oLayoutM) { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Sets the aggregated {@link #getLayoutS layoutS}.
 * @param {sap.ui.layout.cssgrid.GridSettings} oLayoutS The layoutS to set
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.setLayoutS = function(oLayoutS) { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };

/**
 * Sets the aggregated {@link #getLayoutXL layoutXL}.
 * @param {sap.ui.layout.cssgrid.GridSettings} oLayoutXL The layoutXL to set
 * @returns {sap.ui.layout.cssgrid.GridResponsiveLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridResponsiveLayout.prototype.setLayoutXL = function(oLayoutXL) { return new sap.ui.layout.cssgrid.GridResponsiveLayout(); };


// ---- sap.ui.layout.cssgrid.GridSettings --------------------------------------------------------------------------

/**
 * Constructor for a new GridSettings.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getGridTemplateColumns gridTemplateColumns} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridTemplateRows gridTemplateRows} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridRowGap gridRowGap} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getGridColumnGap gridColumnGap} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getGridGap gridGap} : sap.ui.layout.cssgrid.CSSGridGapShortHand (default: )</li>
 * <li>{@link #getGridAutoRows gridAutoRows} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridAutoColumns gridAutoColumns} : sap.ui.layout.cssgrid.CSSGridTrack (default: )</li>
 * <li>{@link #getGridAutoFlow gridAutoFlow} : sap.ui.layout.cssgrid.CSSGridAutoFlow (default: Row)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Holds a set of CSS display:grid properties
 * @version 1.71.0
 * 
 * @extends sap.ui.base.ManagedObject
 * 
 * @since 1.60
 * @constructor
 * @public
 * @ui5-metamodel This simple type will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.cssgrid.GridSettings = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.cssgrid.GridSettings with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridSettings.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridAutoColumns</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.getGridAutoColumns = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>Row</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridAutoFlow} Value of property <code>gridAutoFlow</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.getGridAutoFlow = function() { return new sap.ui.layout.cssgrid.CSSGridAutoFlow(); };

/**
 * Gets current value of property {@link #getGridAutoRows gridAutoRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridAutoRows</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.getGridAutoRows = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets current value of property {@link #getGridColumnGap gridColumnGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>gridColumnGap</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.getGridColumnGap = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getGridGap gridGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridGapShortHand} Value of property <code>gridGap</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.getGridGap = function() { return new sap.ui.layout.cssgrid.CSSGridGapShortHand(); };

/**
 * Gets current value of property {@link #getGridRowGap gridRowGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>gridRowGap</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.getGridRowGap = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridTemplateColumns</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.getGridTemplateColumns = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * Default value is <code>empty string</code>.
 * @returns {sap.ui.layout.cssgrid.CSSGridTrack} Value of property <code>gridTemplateRows</code>
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.getGridTemplateRows = function() { return new sap.ui.layout.cssgrid.CSSGridTrack(); };

/**
 * Returns a metadata object for class sap.ui.layout.cssgrid.GridSettings.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.cssgrid.GridSettings.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoColumns New value for property <code>gridAutoColumns</code>
 * @returns {sap.ui.layout.cssgrid.GridSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.setGridAutoColumns = function(sGridAutoColumns) { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Row</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridAutoFlow} sGridAutoFlow New value for property <code>gridAutoFlow</code>
 * @returns {sap.ui.layout.cssgrid.GridSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.setGridAutoFlow = function(sGridAutoFlow) { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Sets a new value for property {@link #getGridAutoRows gridAutoRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoRows New value for property <code>gridAutoRows</code>
 * @returns {sap.ui.layout.cssgrid.GridSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.setGridAutoRows = function(sGridAutoRows) { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Sets a new value for property {@link #getGridColumnGap gridColumnGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.CSSSize} sGridColumnGap New value for property <code>gridColumnGap</code>
 * @returns {sap.ui.layout.cssgrid.GridSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.setGridColumnGap = function(sGridColumnGap) { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Sets a new value for property {@link #getGridGap gridGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridGapShortHand} sGridGap New value for property <code>gridGap</code>
 * @returns {sap.ui.layout.cssgrid.GridSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.setGridGap = function(sGridGap) { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Sets a new value for property {@link #getGridRowGap gridRowGap}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.core.CSSSize} sGridRowGap New value for property <code>gridRowGap</code>
 * @returns {sap.ui.layout.cssgrid.GridSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.setGridRowGap = function(sGridRowGap) { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateColumns New value for property <code>gridTemplateColumns</code>
 * @returns {sap.ui.layout.cssgrid.GridSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.setGridTemplateColumns = function(sGridTemplateColumns) { return new sap.ui.layout.cssgrid.GridSettings(); };

/**
 * Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.
 * 
 * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}
 * 
 * <b>Note:</b> Not supported in IE11, Edge 15.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateRows New value for property <code>gridTemplateRows</code>
 * @returns {sap.ui.layout.cssgrid.GridSettings} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.cssgrid.GridSettings.prototype.setGridTemplateRows = function(sGridTemplateRows) { return new sap.ui.layout.cssgrid.GridSettings(); };


// ---- sap.ui.layout.cssgrid.IGridConfigurable --------------------------------------------------------------------------

/**
 * The function is used by GridLayoutDelegate to determine on which HTML Elements the display:grid styles should be applied
 * 
 * @returns {sap.ui.core.Control[]|HTMLElement[]} The controls or HTML elements on which display:grid styles should be applied
 * @since 1.60.0
 * @public
 * 
 */
sap.ui.layout.cssgrid.IGridConfigurable.getGridDomRefs = function() { return new Array(); };

/**
 * The function is used by GridLayoutDelegate to get the grid layout (display:grid styles) to apply
 * 
 * @returns {sap.ui.layout.cssgrid.GridLayoutBase} The display:grid layout to apply
 * @since 1.60.0
 * @public
 * 
 */
sap.ui.layout.cssgrid.IGridConfigurable.getGridLayoutConfiguration = function() { return new sap.ui.layout.cssgrid.GridLayoutBase(); };


// ---- sap.ui.layout.DynamicSideContent --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DynamicSideContent</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowSideContent showSideContent} : boolean (default: true)</li>
 * <li>{@link #getShowMainContent showMainContent} : boolean (default: true)</li>
 * <li>{@link #getSideContentVisibility sideContentVisibility} : sap.ui.layout.SideContentVisibility (default: ShowAboveS)</li>
 * <li>{@link #getSideContentFallDown sideContentFallDown} : sap.ui.layout.SideContentFallDown (default: OnMinimumWidth)</li>
 * <li>{@link #getEqualSplit equalSplit} : boolean (default: false)</li>
 * <li>{@link #getContainerQuery containerQuery} : boolean (default: false)</li>
 * <li>{@link #getSideContentPosition sideContentPosition} : sap.ui.layout.SideContentPosition (default: End)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMainContent mainContent} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getSideContent sideContent} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:breakpointChanged breakpointChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Layout control that allows additional (side) content to be displayed dynamically.
 * 
 * <h3>Overview</h3>
 * 
 * <code>DynamicSideContent</code> is a layout control that allows additional content
 * to be displayed in a way that flexibly adapts to different screen sizes. The side
 * content appears in a container next to or directly below the main content
 * (it doesn't overlay). When the side content is triggered, the main content becomes
 * narrower (if appearing side-by-side). The side content contains a separate scrollbar
 * when appearing next to the main content.
 * 
 * <h3>Usage</h3>
 * 
 * <i>When to use?</i>
 * 
 * Use this control if you want to display relevant information that is not critical
 * for users to complete a task. Users should have access to all the key functions and
 * critical information in the app even if they do not see the side content. This is
 * important because on smaller screen sizes it may be difficult to display the side
 * content in a way that is easily accessible for the user.
 * 
 * <i>When not to use?</i>
 * 
 * Don't use it if you want to display navigation or critical information that prevents
 * users from completing a task when they have no access to the side content.
 * 
 * <h3>Responsive Behavior</h3>
 * 
 * Screen width > 1440 px
 * 
 * <ul><li>Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px
 * each).</li>
 * <li>If the application defines a trigger, the side content can be hidden.</li></ul>
 * 
 * Screen width <= 1440 px and > 720px
 * 
 * <ul><li>Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of
 * 320px each). If the side content width falls below 320 px, it automatically slides
 * under the main content, unless the app development team specifies that it should
 * disappear.</li></ul>
 * 
 * Screen width <= 720 px (for example on a mobile device)
 * 
 * <ul><li>In this case, the side content automatically disappears from the screen (unless
 * specified to stay under the content) and can be triggered from a pre-set trigger
 * (specified within the app). When the side content is triggered, it replaces the
 * main content. We recommend that you always place the trigger for the side content
 * in the same location, such as in the app footer.</li></ul>
 * 
 * A special case, allows for comparison mode between the main and side content. In
 * this case, the screen is split into 50:50 percent for main vs. side content. The
 * responsive behavior of the equal split is the same as in the standard view - the
 * side content disappears on screen widths of less than 720 px and can only be
 * viewed by triggering it.
 * 
 * <b>Note:</b> If the control that has property sticky inside the <code>DynamicSideContent</code> the stickiness of that control will not work.
 * <code>DynamicSideContent</code> has the overflow: auto style definition and this prevents the sticky elements of the control from becoming fixed at the top of the viewport.
 * This applies for example to {@link sap.m.Table} and {@link sap.m.PlanningCalendar}.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.30
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/dynamic-side-content/ Dynamic Side Content}
 * 
 */
sap.ui.layout.DynamicSideContent = function(sId,mSettings) {};
/**
 * Fires when the current breakpoint has been changed.
 * @event
 * @since 1.32
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.currentBreakpoint 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.breakpointChanged = function(oControlEvent) {  };

/**
 * Adds a control to the main content area.
 * Only the main content part in the aggregation is re-rendered.
 * @param {object} oControl Object to be added in the aggregation
 * @returns {sap.ui.layout.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.addMainContent = function(oControl) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Adds a control to the side content area.
 * Only the side content part in the aggregation is re-rendered.
 * @param {object} oControl Object to be added in the aggregation
 * @returns {sap.ui.layout.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.addSideContent = function(oControl) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:breakpointChanged breakpointChanged} event of this <code>sap.ui.layout.DynamicSideContent</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.layout.DynamicSideContent</code> itself.
 * 
 * Fires when the current breakpoint has been changed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.layout.DynamicSideContent</code> itself
 * 
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.32
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.attachBreakpointChanged = function(oData,fnFunction,oListener) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Destroys all the mainContent in the aggregation {@link #getMainContent mainContent}.
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.destroyMainContent = function() { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Destroys all the sideContent in the aggregation {@link #getSideContent sideContent}.
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.destroySideContent = function() { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:breakpointChanged breakpointChanged} event of this <code>sap.ui.layout.DynamicSideContent</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.detachBreakpointChanged = function(fnFunction,oListener) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Creates a new subclass of class sap.ui.layout.DynamicSideContent with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.DynamicSideContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:breakpointChanged breakpointChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.currentBreakpoint] 
 * 
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.32
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.fireBreakpointChanged = function(mParameters) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Gets current value of property {@link #getContainerQuery containerQuery}.
 * 
 * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>containerQuery</code>
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getContainerQuery = function() { return false; };

/**
 * Returns the breakpoint for the current state of the control.
 * @returns {String} currentBreakpoint
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getCurrentBreakpoint = function() { return null; };

/**
 * Gets current value of property {@link #getEqualSplit equalSplit}.
 * 
 * Defines whether the control is in equal split mode. In this mode, the side and the main content
 * take 50:50 percent of the container on all screen sizes except for phone, where the main and
 * side contents are switching visibility using the toggle method.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>equalSplit</code>
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getEqualSplit = function() { return false; };

/**
 * Gets content of aggregation {@link #getMainContent mainContent}.
 * 
 * Main content controls.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getMainContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.DynamicSideContent.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.DynamicSideContent.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowMainContent showMainContent}.
 * 
 * Determines whether the main content is visible or hidden.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showMainContent</code>
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getShowMainContent = function() { return false; };

/**
 * Gets current value of property {@link #getShowSideContent showSideContent}.
 * 
 * Determines whether the side content is visible or hidden.
 * 
 * <b>Note:</b> If both <code>DynamicSideContent</code> and <code>showMainContent</code> properties are set to <code>true</code>,
 * use the <code>toggle</code> method for showing the side content on phone.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSideContent</code>
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getShowSideContent = function() { return false; };

/**
 * Gets content of aggregation {@link #getSideContent sideContent}.
 * 
 * Side content controls.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getSideContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSideContentFallDown sideContentFallDown}.
 * 
 * Determines on which breakpoints the side content falls down below the main content.
 * 
 * Default value is <code>OnMinimumWidth</code>.
 * @returns {sap.ui.layout.SideContentFallDown} Value of property <code>sideContentFallDown</code>
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getSideContentFallDown = function() { return new sap.ui.layout.SideContentFallDown(); };

/**
 * Gets current value of property {@link #getSideContentPosition sideContentPosition}.
 * 
 * Determines whether the side content is on the left or on the right side of the main content.
 * 
 * Default value is <code>End</code>.
 * @returns {sap.ui.layout.SideContentPosition} Value of property <code>sideContentPosition</code>
 * @since 1.36
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getSideContentPosition = function() { return new sap.ui.layout.SideContentPosition(); };

/**
 * Gets current value of property {@link #getSideContentVisibility sideContentVisibility}.
 * 
 * Determines on which breakpoints the side content is visible.
 * 
 * Default value is <code>ShowAboveS</code>.
 * @returns {sap.ui.layout.SideContentVisibility} Value of property <code>sideContentVisibility</code>
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getSideContentVisibility = function() { return new sap.ui.layout.SideContentVisibility(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMainContent mainContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oMainContent The mainContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.indexOfMainContent = function(oMainContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getSideContent sideContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oSideContent The sideContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.indexOfSideContent = function(oSideContent) { return 0; };

/**
 * Inserts a mainContent into the aggregation {@link #getMainContent mainContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oMainContent The mainContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the mainContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the mainContent is inserted at
 *              the last position
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.insertMainContent = function(oMainContent,iIndex) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Inserts a sideContent into the aggregation {@link #getSideContent sideContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oSideContent The sideContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the sideContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the sideContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the sideContent is inserted at
 *              the last position
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.insertSideContent = function(oSideContent,iIndex) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Checks if the main content is visible.
 * @returns {boolean} Main content visibility state
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.isMainContentVisible = function() { return false; };

/**
 * Checks if the side content is visible.
 * @returns {boolean} Side content visibility state
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.isSideContentVisible = function() { return false; };

/**
 * Removes all the controls from the aggregation {@link #getMainContent mainContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.removeAllMainContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getSideContent sideContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.removeAllSideContent = function() { return new Array(); };

/**
 * Removes a mainContent from the aggregation {@link #getMainContent mainContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vMainContent The mainContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed mainContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.removeMainContent = function(vMainContent) { return new sap.ui.core.Control(); };

/**
 * Removes a sideContent from the aggregation {@link #getSideContent sideContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vSideContent The sideContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed sideContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.removeSideContent = function(vSideContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getContainerQuery containerQuery}.
 * 
 * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bContainerQuery New value for property <code>containerQuery</code>
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setContainerQuery = function(bContainerQuery) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Sets or unsets the page in equalSplit mode.
 * @param {boolean}[bState] Determines if the page is set to equalSplit mode
 * @returns {sap.ui.layout.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setEqualSplit = function(bState) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Sets the showMainContent property.
 * @param {boolean} bVisible Determines if the main content part is visible
 * @param {boolean} bSuppressVisualUpdate Determines if the visual state is updated
 * @returns {sap.ui.layout.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setShowMainContent = function(bVisible,bSuppressVisualUpdate) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Sets the showSideContent property.
 * @param {boolean} bVisible Determines if the side content part is visible
 * @param {boolean} bSuppressVisualUpdate Determines if the visual state is updated
 * @returns {sap.ui.layout.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setShowSideContent = function(bVisible,bSuppressVisualUpdate) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Sets a new value for property {@link #getSideContentFallDown sideContentFallDown}.
 * 
 * Determines on which breakpoints the side content falls down below the main content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>OnMinimumWidth</code>.
 * @param {sap.ui.layout.SideContentFallDown} sSideContentFallDown New value for property <code>sideContentFallDown</code>
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setSideContentFallDown = function(sSideContentFallDown) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Sets a new value for property {@link #getSideContentPosition sideContentPosition}.
 * 
 * Determines whether the side content is on the left or on the right side of the main content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>End</code>.
 * @param {sap.ui.layout.SideContentPosition} sSideContentPosition New value for property <code>sideContentPosition</code>
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setSideContentPosition = function(sSideContentPosition) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Sets the sideContentVisibility property.
 * @param {sap.ui.layout.SideContentVisibility} sVisibility Determines on which breakpoints the side content is visible.
 * @param {boolean} bSuppressVisualUpdate Determines if the visual state is updated
 * @returns {sap.ui.layout.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setSideContentVisibility = function(sVisibility,bSuppressVisualUpdate) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Used for the toggle button functionality.
 * When the control is on a phone screen size only, one control area is visible.
 * This helper method is used to implement a button/switch for changing
 * between the main and side content areas.
 * Only works if the current breakpoint is "S".
 * @returns {sap.ui.layout.DynamicSideContent} this pointer for chaining
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.toggle = function() { return new sap.ui.layout.DynamicSideContent(); };


// ---- sap.ui.layout.FixFlex --------------------------------------------------------------------------

/**
 * Constructor for a new FixFlex.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVertical vertical} : boolean (default: true)</li>
 * <li>{@link #getFixFirst fixFirst} : boolean (default: true)</li>
 * <li>{@link #getFixContentSize fixContentSize} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getMinFlexSize minFlexSize} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFixContent fixContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getFlexContent flexContent} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A layout container with a fixed and a flexible part.
 * <h3>Overview</h3>
 * The FixFlex control builds the container for a layout with a fixed and a flexible part. The flexible container adapts its size to the fix container.
 * <h4>Guidelines:</h4>
 * <ul>
 * <li>The fix container can hold any number of controls, while the flexible container can hold only one</li>
 * <li>In order for the FixFlex to stretch properly, the parent element, in which the control is placed, needs to have a specified height or needs to have an absolute position.</li>
 * <li>Avoid nesting FixFlex in other flexbox-based layout controls ({@link sap.ui.layout.FixFlex FixFlex}, {@link sap.m.FlexBox FlexBox}, Hbox, Vbox). Otherwise, contents may be not accessible or multiple scrollbars can appear.</li>
 * </ul>
 * <h3>Structure</h3>
 * The behavior of the FixFlex is controlled by the following properties:
 * <ul>
 * <li><code>fixContentSize</code> - The width/height of the fix part of the control</li>
 * <li><code>fixFirst</code> - The ordering of the fix and flex part</li>
 * <li><code>minFlexSize</code> - Scrolling inside the flex part, if its contents are large</li>
 * <li><code>vertical</code> - Alignment of the FixFlex control</li>
 * </ul>
 * <h3>Responsive Behavior</h3>
 * <ul>
 * <li>If the child control of the flex or the fix container has width/height bigger than the container itself, the child control will be cropped in the view.</li>
 * <li>If minFlexSize is set, then a scrollbar is shown in the flexible part, depending on the <code>vertical</code> property.</li>
 * </ul>
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.25.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.FixFlex = function(sId,mSettings) {};
/**
 * Adds some fixContent to the aggregation {@link #getFixContent fixContent}.
 * @param {sap.ui.core.Control}
 *            oFixContent The fixContent to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.addFixContent = function(oFixContent) { return new sap.ui.layout.FixFlex(); };

/**
 * Destroys all the fixContent in the aggregation {@link #getFixContent fixContent}.
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.destroyFixContent = function() { return new sap.ui.layout.FixFlex(); };

/**
 * Destroys the flexContent in the aggregation {@link #getFlexContent flexContent}.
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.destroyFlexContent = function() { return new sap.ui.layout.FixFlex(); };

/**
 * Creates a new subclass of class sap.ui.layout.FixFlex with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.FixFlex.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getFixContent fixContent}.
 * 
 * Controls in the fixed part of the layout.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getFixContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFixContentSize fixContentSize}.
 * 
 * Determines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>fixContentSize</code>
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getFixContentSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getFixFirst fixFirst}.
 * 
 * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom ( if the value is "false").
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>fixFirst</code>
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getFixFirst = function() { return false; };

/**
 * Gets content of aggregation {@link #getFlexContent flexContent}.
 * 
 * Control in the stretching part of the layout.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getFlexContent = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.layout.FixFlex.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.FixFlex.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinFlexSize minFlexSize}.
 * 
 * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger than the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>minFlexSize</code>
 * @since 1.29
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getMinFlexSize = function() { return 0; };

/**
 * Gets current value of property {@link #getVertical vertical}.
 * 
 * Determines the direction of the layout of child elements. True for vertical and false for horizontal layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>vertical</code>
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getVertical = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getFixContent fixContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oFixContent The fixContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.indexOfFixContent = function(oFixContent) { return 0; };

/**
 * Inserts a fixContent into the aggregation {@link #getFixContent fixContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oFixContent The fixContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the fixContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the fixContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the fixContent is inserted at
 *              the last position
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.insertFixContent = function(oFixContent,iIndex) { return new sap.ui.layout.FixFlex(); };

/**
 * Removes all the controls from the aggregation {@link #getFixContent fixContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.removeAllFixContent = function() { return new Array(); };

/**
 * Removes a fixContent from the aggregation {@link #getFixContent fixContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vFixContent The fixContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed fixContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.removeFixContent = function(vFixContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getFixContentSize fixContentSize}.
 * 
 * Determines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sFixContentSize New value for property <code>fixContentSize</code>
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setFixContentSize = function(sFixContentSize) { return new sap.ui.layout.FixFlex(); };

/**
 * Sets a new value for property {@link #getFixFirst fixFirst}.
 * 
 * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom ( if the value is "false").
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFixFirst New value for property <code>fixFirst</code>
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setFixFirst = function(bFixFirst) { return new sap.ui.layout.FixFlex(); };

/**
 * Sets the aggregated {@link #getFlexContent flexContent}.
 * @param {sap.ui.core.Control} oFlexContent The flexContent to set
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setFlexContent = function(oFlexContent) { return new sap.ui.layout.FixFlex(); };

/**
 * Sets a new value for property {@link #getMinFlexSize minFlexSize}.
 * 
 * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger than the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMinFlexSize New value for property <code>minFlexSize</code>
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @since 1.29
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setMinFlexSize = function(iMinFlexSize) { return new sap.ui.layout.FixFlex(); };

/**
 * Sets a new value for property {@link #getVertical vertical}.
 * 
 * Determines the direction of the layout of child elements. True for vertical and false for horizontal layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVertical New value for property <code>vertical</code>
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setVertical = function(bVertical) { return new sap.ui.layout.FixFlex(); };


// ---- sap.ui.layout.form.ColumnCells --------------------------------------------------------------------------


// ---- sap.ui.layout.form.ColumnContainerData --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.ColumnContainerData.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColumnsXL columnsXL} : sap.ui.layout.form.ColumnsXL (default: 2)</li>
 * <li>{@link #getColumnsL columnsL} : sap.ui.layout.form.ColumnsL (default: 2)</li>
 * <li>{@link #getColumnsM columnsM} : sap.ui.layout.form.ColumnsM (default: 1)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>ColumnLayout</code>-specific layout data for the <code>FormContainer</code> element.
 * 
 * Depending on its size, the <code>Form</code> control is divided into 1, 2, 3 or 4 columns
 * by the <code>ColumnLayout</code> control.
 * Using <code>ColumnContainerData</code>, the size of the <code>FormContainer</code> element can be influenced.
 * @extends sap.ui.core.LayoutData
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.56.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.ColumnContainerData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.ColumnContainerData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ColumnContainerData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColumnsL columnsL}.
 * 
 * Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has large size.
 * 
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * Default value is <code>2</code>.
 * @returns {sap.ui.layout.form.ColumnsL} Value of property <code>columnsL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnContainerData.prototype.getColumnsL = function() { return new sap.ui.layout.form.ColumnsL(); };

/**
 * Gets current value of property {@link #getColumnsM columnsM}.
 * 
 * Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has medium size.
 * 
 * Default value is <code>1</code>.
 * @returns {sap.ui.layout.form.ColumnsM} Value of property <code>columnsM</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnContainerData.prototype.getColumnsM = function() { return new sap.ui.layout.form.ColumnsM(); };

/**
 * Gets current value of property {@link #getColumnsXL columnsXL}.
 * 
 * Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has extra-large size.
 * 
 * The number of columns for extra-large size must not be smaller than the number of columns for large size.
 * 
 * Default value is <code>2</code>.
 * @returns {sap.ui.layout.form.ColumnsXL} Value of property <code>columnsXL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnContainerData.prototype.getColumnsXL = function() { return new sap.ui.layout.form.ColumnsXL(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.ColumnContainerData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ColumnContainerData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getColumnsL columnsL}.
 * 
 * Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has large size.
 * 
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {sap.ui.layout.form.ColumnsL} sColumnsL New value for property <code>columnsL</code>
 * @returns {sap.ui.layout.form.ColumnContainerData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnContainerData.prototype.setColumnsL = function(sColumnsL) { return new sap.ui.layout.form.ColumnContainerData(); };

/**
 * Sets a new value for property {@link #getColumnsM columnsM}.
 * 
 * Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {sap.ui.layout.form.ColumnsM} sColumnsM New value for property <code>columnsM</code>
 * @returns {sap.ui.layout.form.ColumnContainerData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnContainerData.prototype.setColumnsM = function(sColumnsM) { return new sap.ui.layout.form.ColumnContainerData(); };

/**
 * Sets a new value for property {@link #getColumnsXL columnsXL}.
 * 
 * Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has extra-large size.
 * 
 * The number of columns for extra-large size must not be smaller than the number of columns for large size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {sap.ui.layout.form.ColumnsXL} sColumnsXL New value for property <code>columnsXL</code>
 * @returns {sap.ui.layout.form.ColumnContainerData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnContainerData.prototype.setColumnsXL = function(sColumnsXL) { return new sap.ui.layout.form.ColumnContainerData(); };


// ---- sap.ui.layout.form.ColumnElementData --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.ColumnElementData.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getCellsLarge cellsLarge} : sap.ui.layout.form.ColumnCells (default: 8)</li>
 * <li>{@link #getCellsSmall cellsSmall} : sap.ui.layout.form.ColumnCells (default: 12)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>ColumnLayout</code>-specific layout data for the <code>FormElement</code> content fields.
 * 
 * One <code>FormElement</code> element contains 12 cells and has two sizes, small and large.
 * Using <code>ColumnElementData</code>, the default calculation of the cells used for a field or label
 * can be overwritten.
 * @extends sap.ui.core.LayoutData
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.56.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.ColumnElementData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.ColumnElementData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ColumnElementData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getCellsLarge cellsLarge}.
 * 
 * Number of cells used by a field if the <code>FormElement</code> element is large.
 * The label is then beside the fields per default.
 * 
 * If set to <code>12</code>, the full size of the <code>FormElement</code> element is used.
 * 
 * Default value is <code>8</code>.
 * @returns {sap.ui.layout.form.ColumnCells} Value of property <code>cellsLarge</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnElementData.prototype.getCellsLarge = function() { return new sap.ui.layout.form.ColumnCells(); };

/**
 * Gets current value of property {@link #getCellsSmall cellsSmall}.
 * 
 * Number of cells used by a field if the <code>FormElement</code> element is small.
 * The label is then above the fields per default.
 * 
 * If set to <code>12</code>, the full size of the <code>FormElement</code> is used.
 * 
 * Default value is <code>12</code>.
 * @returns {sap.ui.layout.form.ColumnCells} Value of property <code>cellsSmall</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnElementData.prototype.getCellsSmall = function() { return new sap.ui.layout.form.ColumnCells(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.ColumnElementData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ColumnElementData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getCellsLarge cellsLarge}.
 * 
 * Number of cells used by a field if the <code>FormElement</code> element is large.
 * The label is then beside the fields per default.
 * 
 * If set to <code>12</code>, the full size of the <code>FormElement</code> element is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>8</code>.
 * @param {sap.ui.layout.form.ColumnCells} sCellsLarge New value for property <code>cellsLarge</code>
 * @returns {sap.ui.layout.form.ColumnElementData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnElementData.prototype.setCellsLarge = function(sCellsLarge) { return new sap.ui.layout.form.ColumnElementData(); };

/**
 * Sets a new value for property {@link #getCellsSmall cellsSmall}.
 * 
 * Number of cells used by a field if the <code>FormElement</code> element is small.
 * The label is then above the fields per default.
 * 
 * If set to <code>12</code>, the full size of the <code>FormElement</code> is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {sap.ui.layout.form.ColumnCells} sCellsSmall New value for property <code>cellsSmall</code>
 * @returns {sap.ui.layout.form.ColumnElementData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnElementData.prototype.setCellsSmall = function(sCellsSmall) { return new sap.ui.layout.form.ColumnElementData(); };


// ---- sap.ui.layout.form.ColumnLayout --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.ui.layout.form.ColumnLayout</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColumnsXL columnsXL} : sap.ui.layout.form.ColumnsXL (default: 2)</li>
 * <li>{@link #getColumnsL columnsL} : sap.ui.layout.form.ColumnsL (default: 2)</li>
 * <li>{@link #getColumnsM columnsM} : sap.ui.layout.form.ColumnsM (default: 1)</li>
 * <li>{@link #getLabelCellsLarge labelCellsLarge} : sap.ui.layout.form.ColumnCells (default: 4)</li>
 * <li>{@link #getEmptyCellsLarge emptyCellsLarge} : sap.ui.layout.form.EmptyCells (default: 0)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormLayout#constructor sap.ui.layout.form.FormLayout}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>ColumnLayout</code> control renders a <code>Form</code> control in a column-based responsive way.
 * Depending on its size, the <code>Form</code> control is divided into one or more columns.
 * (XL - max. 4 columns, L - max. 3 columns, M -  max. 2 columns and S - 1 column.)
 * 
 * The <code>FormContainer</code> elements are spread out to the columns depending on the number of <code>FormContainer</code>
 * elements and their size. For example, if there are 4 columns and 2 <code>FormContainer</code> elements,
 * each <code>FormContainer</code> element will use 2 columns. If there are 3 columns and 2 <code>FormContainer</code> elements,
 * the larger one will use 2 columns, the smaller one 1 column. The size of a <code>FormContainer</code> element will be determined
 * based on the number of visible <code>FormElement</code> elements assigned to it.
 * If there are more <code>FormContainer</code> elements than columns, every <code>FormContainer</code> element uses only
 * one column. So the last row of the <code>Form</code> control will not be fully used.
 * 
 * The default size of the <code>FormContainer</code> element can be overwritten by using <code>ColumnContainerData</code>
 * as <code>LayoutData</code>. If one <code>FormContainer</code> element has <code>ColumnContainerData</code> set,
 * the size calculation of the other <code>FormContainer</code> elements might not lead to the expected result.
 * In this case, use <code>ColumnContainerData</code> also for the other <code>FormContainer</code> elements.
 * 
 * The <code>FormElement</code> elements are spread out to the columns of a <code>FormContainer</code> element
 * arranged in a newspaper-like order. The position of the labels and fields depends on the size of the used column.
 * If there is enough space, the labels are beside the fields, otherwise above the fields.
 * 
 * The default size of a content control of a <code>FormElement</code> element can be overwritten
 * using <code>ColumnElementData</code> as <code>LayoutData</code>.
 * If one control assigned to a <code>FormElement</code> element has <code>ColumnElementData</code> set,
 * the size calculation of the other controls assigned to the <code>FormElement</code> element
 * might not lead to the expected result.
 * In this case, use <code>ColumnElementData</code> for the other controls, assigned to the <code>FormElement</code> element, too.
 * 
 * The placement of the <code>FormElement</code> elements is made by the browser <code>column-count</code> logic.
 * So this can be different in different browsers and lead in some cases to other results than might be expected.
 * 
 * <b>Note:</b>
 * This control cannot be used stand-alone, it just renders a <code>Form</code> control,
 * so it must be assigned to a <code>Form</code> control using the <code>layout</code> aggregation.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.56.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.ColumnLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.ColumnLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ColumnLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColumnsL columnsL}.
 * 
 * Number of columns for large size.
 * 
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * Default value is <code>2</code>.
 * @returns {sap.ui.layout.form.ColumnsL} Value of property <code>columnsL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.getColumnsL = function() { return new sap.ui.layout.form.ColumnsL(); };

/**
 * Gets current value of property {@link #getColumnsM columnsM}.
 * 
 * Number of columns for medium size.
 * 
 * Default value is <code>1</code>.
 * @returns {sap.ui.layout.form.ColumnsM} Value of property <code>columnsM</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.getColumnsM = function() { return new sap.ui.layout.form.ColumnsM(); };

/**
 * Gets current value of property {@link #getColumnsXL columnsXL}.
 * 
 * Number of columns for extra-large size.
 * 
 * The number of columns for extra-large size must not be smaller than the number of columns for large size.
 * 
 * Default value is <code>2</code>.
 * @returns {sap.ui.layout.form.ColumnsXL} Value of property <code>columnsXL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.getColumnsXL = function() { return new sap.ui.layout.form.ColumnsXL(); };

/**
 * Gets current value of property {@link #getEmptyCellsLarge emptyCellsLarge}.
 * 
 * Defines how many cells are empty at the end of a row.
 * This could be used to keep the fields small on large screens.
 * 
 * Default value is <code>0</code>.
 * @returns {sap.ui.layout.form.EmptyCells} Value of property <code>emptyCellsLarge</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.getEmptyCellsLarge = function() { return new sap.ui.layout.form.EmptyCells(); };

/**
 * Gets current value of property {@link #getLabelCellsLarge labelCellsLarge}.
 * 
 * Defines how many cells a label uses if the column is large.
 * 
 * Default value is <code>4</code>.
 * @returns {sap.ui.layout.form.ColumnCells} Value of property <code>labelCellsLarge</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.getLabelCellsLarge = function() { return new sap.ui.layout.form.ColumnCells(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.ColumnLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ColumnLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getColumnsL columnsL}.
 * 
 * Number of columns for large size.
 * 
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {sap.ui.layout.form.ColumnsL} sColumnsL New value for property <code>columnsL</code>
 * @returns {sap.ui.layout.form.ColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.setColumnsL = function(sColumnsL) { return new sap.ui.layout.form.ColumnLayout(); };

/**
 * Sets a new value for property {@link #getColumnsM columnsM}.
 * 
 * Number of columns for medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {sap.ui.layout.form.ColumnsM} sColumnsM New value for property <code>columnsM</code>
 * @returns {sap.ui.layout.form.ColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.setColumnsM = function(sColumnsM) { return new sap.ui.layout.form.ColumnLayout(); };

/**
 * Sets a new value for property {@link #getColumnsXL columnsXL}.
 * 
 * Number of columns for extra-large size.
 * 
 * The number of columns for extra-large size must not be smaller than the number of columns for large size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {sap.ui.layout.form.ColumnsXL} sColumnsXL New value for property <code>columnsXL</code>
 * @returns {sap.ui.layout.form.ColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.setColumnsXL = function(sColumnsXL) { return new sap.ui.layout.form.ColumnLayout(); };

/**
 * Sets a new value for property {@link #getEmptyCellsLarge emptyCellsLarge}.
 * 
 * Defines how many cells are empty at the end of a row.
 * This could be used to keep the fields small on large screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {sap.ui.layout.form.EmptyCells} sEmptyCellsLarge New value for property <code>emptyCellsLarge</code>
 * @returns {sap.ui.layout.form.ColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.setEmptyCellsLarge = function(sEmptyCellsLarge) { return new sap.ui.layout.form.ColumnLayout(); };

/**
 * Sets a new value for property {@link #getLabelCellsLarge labelCellsLarge}.
 * 
 * Defines how many cells a label uses if the column is large.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>4</code>.
 * @param {sap.ui.layout.form.ColumnCells} sLabelCellsLarge New value for property <code>labelCellsLarge</code>
 * @returns {sap.ui.layout.form.ColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.ColumnLayout.prototype.setLabelCellsLarge = function(sLabelCellsLarge) { return new sap.ui.layout.form.ColumnLayout(); };


// ---- sap.ui.layout.form.ColumnsL --------------------------------------------------------------------------


// ---- sap.ui.layout.form.ColumnsM --------------------------------------------------------------------------


// ---- sap.ui.layout.form.ColumnsXL --------------------------------------------------------------------------


// ---- sap.ui.layout.form.EmptyCells --------------------------------------------------------------------------


// ---- sap.ui.layout.form.Form --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.Form.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormContainers formContainers} : sap.ui.layout.form.FormContainer[] (default)</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title|string</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.core.Toolbar</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.form.FormLayout</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A <code>Form</code> control arranges labels and fields (like input fields) into groups and rows.
 * There are different ways to visualize forms for different screen sizes.
 * 
 * A <code>Form</code> is structured into <code>FormContainers</code>. Each <code>FormContainer</code> consists of <code>FormElements</code>.
 * The <code>FormElements</code> consists of a label and the form fields.
 * A <code>Form</code> doesn't render its content by itself. The rendering is done by the assigned <code>FormLayout</code>.
 * This is so that the rendering can be adopted to new UI requirements without changing the <code>Form</code> itself.
 * 
 * For the content of a <code>Form</code>, <code>VariantLayoutData</code> are supported to allow simple switching of the <code>FormLayout</code>.
 * <code>LayoutData</code> on the content can be used to overwrite the default layout of the <code>Form</code>.
 * 
 * The <code>Form</code> (and its sub-controls) automatically add label and field assignment to enable screen reader support.
 * It also adds keyboard support to navigate between the fields and groups inside the form.
 * 
 * <b>Warning:</b> Do not put any layout or other container controls into the <code>FormElement</code>.
 * Views are also not supported. This could damage the visual layout, keyboard support and screen-reader support.
 * 
 * If editable controls are used as content, the <code>editable</code> property must be set to <code>true</code>,
 * otherwise to <code>false</code>. If the <code>editable</code> property is set incorrectly, there will be visual issues
 * like wrong label alignment or wrong spacing between the controls.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.Form = function(sId,mSettings) {};
/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.layout.form.Form(); };

/**
 * Adds some formContainer to the aggregation {@link #getFormContainers formContainers}.
 * @param {sap.ui.layout.form.FormContainer}
 *            oFormContainer The formContainer to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.addFormContainer = function(oFormContainer) { return new sap.ui.layout.form.Form(); };

/**
 * Destroys all the formContainers in the aggregation {@link #getFormContainers formContainers}.
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyFormContainers = function() { return new sap.ui.layout.form.Form(); };

/**
 * Destroys the layout in the aggregation {@link #getLayout layout}.
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyLayout = function() { return new sap.ui.layout.form.Form(); };

/**
 * Destroys the title in the aggregation {@link #getTitle title}.
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyTitle = function() { return new sap.ui.layout.form.Form(); };

/**
 * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyToolbar = function() { return new sap.ui.layout.form.Form(); };

/**
 * Creates a new subclass of class sap.ui.layout.form.Form with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.Form.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.28.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getEditable editable}.
 * 
 * Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content.
 * If set, all (not only the editable) rows of the form will get the line height of editable fields.
 * 
 * The labels inside the form will be rendered by default in the according mode.
 * 
 * <b>Note:</b> The setting of this property does not change the content of the form.
 * For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.
 * 
 * <b>Warning:</b> If this property is wrongly set, this might lead to visual issues.
 * The labels and fields might be misaligned, the labels might be rendered in the wrong mode,
 * and the spacing between the single controls might be wrong.
 * Also, controls that do not fit the mode might be rendered incorrectly.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>editable</code>
 * @since 1.20.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getEditable = function() { return false; };

/**
 * Gets content of aggregation {@link #getFormContainers formContainers}.
 * 
 * Containers with the content of the form. A <code>FormContainer</code> represents a group inside the <code>Form</code>.
 * 
 * @returns {sap.ui.layout.form.FormContainer[]}
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getFormContainers = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getLayout layout}.
 * 
 * Layout of the <code>Form</code>. The assigned <code>Layout</code> renders the <code>Form</code>.
 * We recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>Form</code>,
 * as its responsiveness allows the available space to be used in the best way possible.
 * 
 * @returns {sap.ui.layout.form.FormLayout}
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getLayout = function() { return new sap.ui.layout.form.FormLayout(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.Form.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.Form.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getTitle title}.
 * 
 * Title of the <code>Form</code>. Can either be a <code>Title</code> element or a string.
 * If a <code>Title</code> element it used, the style of the title can be set.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * 
 * @returns {sap.ui.core.Title|string}
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * Gets content of aggregation {@link #getToolbar toolbar}.
 * 
 * Toolbar of the <code>Form</code>.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>.
 * In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.
 * 
 * @returns {sap.ui.core.Toolbar}
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getToolbar = function() { return new sap.ui.core.Toolbar(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the <code>Form</code>.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.layout.form.FormContainer</code> in the aggregation {@link #getFormContainers formContainers}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.form.FormContainer}
 *           oFormContainer The formContainer whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.indexOfFormContainer = function(oFormContainer) { return 0; };

/**
 * Inserts a formContainer into the aggregation {@link #getFormContainers formContainers}.
 * 
 * @param {sap.ui.layout.form.FormContainer}
 *            oFormContainer The formContainer to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the formContainer should be inserted at; for
 *              a negative value of <code>iIndex</code>, the formContainer is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the formContainer is inserted at
 *              the last position
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.insertFormContainer = function(oFormContainer,iIndex) { return new sap.ui.layout.form.Form(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.28.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFormContainers formContainers}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.layout.form.FormContainer[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeAllFormContainers = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.28.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a formContainer from the aggregation {@link #getFormContainers formContainers}.
 * 
 * @param {int | string | sap.ui.layout.form.FormContainer} vFormContainer The formContainer to remove or its index or id
 * @returns {sap.ui.layout.form.FormContainer} The removed formContainer or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeFormContainer = function(vFormContainer) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets a new value for property {@link #getEditable editable}.
 * 
 * Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content.
 * If set, all (not only the editable) rows of the form will get the line height of editable fields.
 * 
 * The labels inside the form will be rendered by default in the according mode.
 * 
 * <b>Note:</b> The setting of this property does not change the content of the form.
 * For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.
 * 
 * <b>Warning:</b> If this property is wrongly set, this might lead to visual issues.
 * The labels and fields might be misaligned, the labels might be rendered in the wrong mode,
 * and the spacing between the single controls might be wrong.
 * Also, controls that do not fit the mode might be rendered incorrectly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEditable New value for property <code>editable</code>
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @since 1.20.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setEditable = function(bEditable) { return new sap.ui.layout.form.Form(); };

/**
 * Sets the aggregated {@link #getLayout layout}.
 * @param {sap.ui.layout.form.FormLayout} oLayout The layout to set
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setLayout = function(oLayout) { return new sap.ui.layout.form.Form(); };

/**
 * Sets the aggregated {@link #getTitle title}.
 * @param {sap.ui.core.Title|string} vTitle The title to set
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setTitle = function(vTitle) { return new sap.ui.layout.form.Form(); };

/**
 * Sets the aggregated {@link #getToolbar toolbar}.
 * @param {sap.ui.core.Toolbar} oToolbar The toolbar to set
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setToolbar = function(oToolbar) { return new sap.ui.layout.form.Form(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of the <code>Form</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setWidth = function(sWidth) { return new sap.ui.layout.form.Form(); };


// ---- sap.ui.layout.form.FormContainer --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.FormContainer.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getExpandable expandable} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormElements formElements} : sap.ui.layout.form.FormElement[] (default)</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title|string</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.core.Toolbar</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A <code>FormContainer</code> represents a group inside a <code>Form</code>. It consists of <code>FormElements</code>.
 * The rendering of the <code>FormContainer</code> is done by the <code>FormLayout</code> assigned to the <code>Form</code>.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.FormContainer = function(sId,mSettings) {};
/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Adds some formElement to the aggregation {@link #getFormElements formElements}.
 * @param {sap.ui.layout.form.FormElement}
 *            oFormElement The formElement to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.addFormElement = function(oFormElement) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Destroys all the formElements in the aggregation {@link #getFormElements formElements}.
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.destroyFormElements = function() { return new sap.ui.layout.form.FormContainer(); };

/**
 * Destroys the title in the aggregation {@link #getTitle title}.
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.destroyTitle = function() { return new sap.ui.layout.form.FormContainer(); };

/**
 * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.destroyToolbar = function() { return new sap.ui.layout.form.FormContainer(); };

/**
 * Creates a new subclass of class sap.ui.layout.form.FormContainer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getExpandable expandable}.
 * 
 * Defines if the <code>FormContainer</code> is expandable.
 * 
 * <b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the <code>FormContainer</code>.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>expandable</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getExpandable = function() { return false; };

/**
 * Gets current value of property {@link #getExpanded expanded}.
 * 
 * Container is expanded.
 * 
 * <b>Note:</b> This property only works if <code>expandable</code> is set to <code>true</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>expanded</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getExpanded = function() { return false; };

/**
 * Gets content of aggregation {@link #getFormElements formElements}.
 * 
 * The <code>FormElements</code> contain the content (labels and fields) of the <code>FormContainers</code>.
 * 
 * @returns {sap.ui.layout.form.FormElement[]}
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getFormElements = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.FormContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getTitle title}.
 * 
 * Title of the <code>FormContainer</code>. Can either be a <code>Title</code> element or a string.
 * If a <code>Title</code> element is used, the style of the title can be set.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * 
 * @returns {sap.ui.core.Title|string}
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * Gets content of aggregation {@link #getToolbar toolbar}.
 * 
 * Toolbar of the <code>FormContainer</code>.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>.
 * In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.
 * 
 * @returns {sap.ui.core.Toolbar}
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getToolbar = function() { return new sap.ui.core.Toolbar(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * If set to <code>false</code>, the <code>FormContainer</code> is not rendered.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.layout.form.FormElement</code> in the aggregation {@link #getFormElements formElements}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.form.FormElement}
 *           oFormElement The formElement whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.indexOfFormElement = function(oFormElement) { return 0; };

/**
 * Inserts a formElement into the aggregation {@link #getFormElements formElements}.
 * 
 * @param {sap.ui.layout.form.FormElement}
 *            oFormElement The formElement to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the formElement should be inserted at; for
 *              a negative value of <code>iIndex</code>, the formElement is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the formElement is inserted at
 *              the last position
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.insertFormElement = function(oFormElement,iIndex) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Determines if the <code>FormContainer</code> is visible or not. Per default it
 * just returns the value of the <code>visible</code> property.
 * But this might be overwritten by inherited elements.
 * 
 * For rendering by <code>FormLayouts</code> this function has to be used instead of
 * <code>getVisible</code>.
 * 
 * @returns {boolean} If true, the <code>FormContainer</code> is visible, otherwise not
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.isVisible = function() { return false; };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFormElements formElements}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.layout.form.FormElement[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeAllFormElements = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a formElement from the aggregation {@link #getFormElements formElements}.
 * 
 * @param {int | string | sap.ui.layout.form.FormElement} vFormElement The formElement to remove or its index or id
 * @returns {sap.ui.layout.form.FormElement} The removed formElement or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeFormElement = function(vFormElement) { return new sap.ui.layout.form.FormElement(); };

/**
 * Sets a new value for property {@link #getExpandable expandable}.
 * 
 * Defines if the <code>FormContainer</code> is expandable.
 * 
 * <b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the <code>FormContainer</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpandable New value for property <code>expandable</code>
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setExpandable = function(bExpandable) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets a new value for property {@link #getExpanded expanded}.
 * 
 * Container is expanded.
 * 
 * <b>Note:</b> This property only works if <code>expandable</code> is set to <code>true</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bExpanded New value for property <code>expanded</code>
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setExpanded = function(bExpanded) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets the aggregated {@link #getTitle title}.
 * @param {sap.ui.core.Title|string} vTitle The title to set
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setTitle = function(vTitle) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets the aggregated {@link #getToolbar toolbar}.
 * @param {sap.ui.core.Toolbar} oToolbar The toolbar to set
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setToolbar = function(oToolbar) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * If set to <code>false</code>, the <code>FormContainer</code> is not rendered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setVisible = function(bVisible) { return new sap.ui.layout.form.FormContainer(); };


// ---- sap.ui.layout.form.FormElement --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.FormElement.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLabel label} : sap.ui.core.Label|string</li>
 * <li>{@link #getFields fields} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A <code>FormElement</code> represents a row in a <code>FormContainer</code>.
 * A <code>FormElement</code> is a combination of one label and different controls associated to this label.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.FormElement = function(sId,mSettings) {};
/**
 * Adds some field to the aggregation {@link #getFields fields}.
 * @param {sap.ui.core.Control}
 *            oField The field to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.addField = function(oField) { return new sap.ui.layout.form.FormElement(); };

/**
 * Destroys all the fields in the aggregation {@link #getFields fields}.
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.destroyFields = function() { return new sap.ui.layout.form.FormElement(); };

/**
 * Destroys the label in the aggregation {@link #getLabel label}.
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.destroyLabel = function() { return new sap.ui.layout.form.FormElement(); };

/**
 * Creates a new subclass of class sap.ui.layout.form.FormElement with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormElement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getFields fields}.
 * 
 * Form controls that belong together to be displayed in one row of a <code>Form</code>.
 * 
 * <b>Warning:</b> Do not put any layout or other container controls in here.
 * This could damage the visual layout, keyboard support and screen-reader support.
 * Only form controls are allowed. Views are also not supported.
 * Allowed controls implement the interface <code>sap.ui.core.IFormContent</code>.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.getFields = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getLabel label}.
 * 
 * Label of the fields. Can either be a <code>Label</code> control or a string.
 * If a <code>Label</code> control is used, the properties of the <code>Label</code> can be set.
 * If no assignment between <code>Label</code> and the fields is set via (<code>labelFor</code> property of the <code>Label</code>),
 * it will be done automatically by the <code>FormElement</code>.
 * In this case the <code>Label</code> is assigned to the fields of the <code>FormElement</code>.
 * 
 * @returns {sap.ui.core.Label|string}
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.getLabel = function() { return new sap.ui.core.Label(); };

/**
 * Returns the <code>Label</code> of the <code>FormElement</code>, even if the <code>Label</code> is assigned as string.
 * The <code>FormLayout</code> needs the information of the label to render the <code>Form</code>.
 * 
 * @returns {sap.ui.core.Label} <code>Label</code> control used to render the label
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.FormElement.prototype.getLabelControl = function() { return new sap.ui.core.Label(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.FormElement.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormElement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * If set to <code>false</code>, the <code>FormElement</code> is not rendered.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.getVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getFields fields}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oField The field whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.indexOfField = function(oField) { return 0; };

/**
 * Inserts a field into the aggregation {@link #getFields fields}.
 * 
 * @param {sap.ui.core.Control}
 *            oField The field to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the field should be inserted at; for
 *              a negative value of <code>iIndex</code>, the field is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the field is inserted at
 *              the last position
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.insertField = function(oField,iIndex) { return new sap.ui.layout.form.FormElement(); };

/**
 * Determines if the <code>FormElement</code> is visible or not. Per default it
 * just returns the value of the <code>visible</code> property.
 * But this might be overwritten by inherited elements.
 * 
 * For rendering by <code>FormLayouts</code> this function has to be used instead of
 * <code>getVisible</code>.
 * 
 * @returns {boolean} If true, the <code>FormElement</code> is visible, otherwise not
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.isVisible = function() { return false; };

/**
 * Removes all the controls from the aggregation {@link #getFields fields}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.removeAllFields = function() { return new Array(); };

/**
 * Removes a field from the aggregation {@link #getFields fields}.
 * 
 * @param {int | string | sap.ui.core.Control} vField The field to remove or its index or id
 * @returns {sap.ui.core.Control} The removed field or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.removeField = function(vField) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated {@link #getLabel label}.
 * @param {sap.ui.core.Label|string} vLabel The label to set
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.setLabel = function(vLabel) { return new sap.ui.layout.form.FormElement(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * If set to <code>false</code>, the <code>FormElement</code> is not rendered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.setVisible = function(bVisible) { return new sap.ui.layout.form.FormElement(); };


// ---- sap.ui.layout.form.FormLayout --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.FormLayout.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.ui.layout.BackgroundDesign (default: Translucent)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Base layout to render a <code>Form</code>.
 * Other layouts to render a <code>Form</code> must inherit from this one.
 * 
 * <b>Note:</b> This control must not be used to render a <code>Form</code> in productive applications as it does not fulfill any
 * design guidelines and usability standards.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.FormLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.FormLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Specifies the background color of the <code>Form</code> content.
 * 
 * <b>Note:</b> The visualization of the different options depends on the theme used.
 * 
 * Default value is <code>Translucent</code>.
 * @returns {sap.ui.layout.BackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormLayout.prototype.getBackgroundDesign = function() { return new sap.ui.layout.BackgroundDesign(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.FormLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Specifies the background color of the <code>Form</code> content.
 * 
 * <b>Note:</b> The visualization of the different options depends on the theme used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Translucent</code>.
 * @param {sap.ui.layout.BackgroundDesign} sBackgroundDesign New value for property <code>backgroundDesign</code>
 * @returns {sap.ui.layout.form.FormLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.FormLayout.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.ui.layout.form.FormLayout(); };


// ---- sap.ui.layout.form.GridContainerData --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.GridContainerData.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHalfGrid halfGrid} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>GridLayout</code>-specific layout data for <code>FormContainers</code>.
 * @extends sap.ui.core.LayoutData
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.GridContainerData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.GridContainerData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridContainerData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getHalfGrid halfGrid}.
 * 
 * If set, the container takes half the width of the <code>Form</code> (8 cells), if not it takes the full width (16 cells).
 * If the <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8 cells. So containers are rendered only once per row.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>halfGrid</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.GridContainerData.prototype.getHalfGrid = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.form.GridContainerData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridContainerData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getHalfGrid halfGrid}.
 * 
 * If set, the container takes half the width of the <code>Form</code> (8 cells), if not it takes the full width (16 cells).
 * If the <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8 cells. So containers are rendered only once per row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHalfGrid New value for property <code>halfGrid</code>
 * @returns {sap.ui.layout.form.GridContainerData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.GridContainerData.prototype.setHalfGrid = function(bHalfGrid) { return new sap.ui.layout.form.GridContainerData(); };


// ---- sap.ui.layout.form.GridElementCells --------------------------------------------------------------------------


// ---- sap.ui.layout.form.GridElementData --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.GridElementData.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHCells hCells} : sap.ui.layout.form.GridElementCells (default: auto)</li>
 * <li>{@link #getVCells vCells} : int (default: 1)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>GridLayout</code>-specific layout data for <code>FormElement</code> fields.
 * @extends sap.ui.core.LayoutData
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.GridElementData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.GridElementData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridElementData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getHCells hCells}.
 * 
 * Number of cells in horizontal direction.
 * 
 * If set to <code>auto</code>, the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.
 * 
 * If set to <code>full</code>, only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above.
 * 
 * <b>Note:</b> For labels, the full size setting has no effect.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.layout.form.GridElementCells} Value of property <code>hCells</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.getHCells = function() { return new sap.ui.layout.form.GridElementCells(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.GridElementData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridElementData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getVCells vCells}.
 * 
 * Number of cells in vertical direction.
 * 
 * <b>Note:</b> This property has no effect on labels.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>vCells</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.getVCells = function() { return 0; };

/**
 * Sets a new value for property {@link #getHCells hCells}.
 * 
 * Number of cells in horizontal direction.
 * 
 * If set to <code>auto</code>, the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.
 * 
 * If set to <code>full</code>, only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above.
 * 
 * <b>Note:</b> For labels, the full size setting has no effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.layout.form.GridElementCells} sHCells New value for property <code>hCells</code>
 * @returns {sap.ui.layout.form.GridElementData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.setHCells = function(sHCells) { return new sap.ui.layout.form.GridElementData(); };

/**
 * Sets a new value for property {@link #getVCells vCells}.
 * 
 * Number of cells in vertical direction.
 * 
 * <b>Note:</b> This property has no effect on labels.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iVCells New value for property <code>vCells</code>
 * @returns {sap.ui.layout.form.GridElementData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.setVCells = function(iVCells) { return new sap.ui.layout.form.GridElementData(); };


// ---- sap.ui.layout.form.GridLayout --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.GridLayout.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSingleColumn singleColumn} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormLayout#constructor sap.ui.layout.form.FormLayout}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This <code>FormLayout</code> renders a <code>Form</code> using an HTML-table based grid.
 * This can be a 16 column grid or an 8 column grid. The grid is stable, so the alignment of the fields is the same for all screen sizes or widths of the <code>Form</code>.
 * Only the width of the single grid columns depends on the available width.
 * 
 * To adjust the appearance inside the <code>GridLayout</code>, you can use <code>GridContainerData</code> for <code>FormContainers</code>
 * and <code>GridElementData</code> for content fields.
 * 
 * <b>Note:</b> If content fields have a <code>width</code> property this will be ignored, as the width of the controls is set by the grid cells.
 * 
 * This control cannot be used stand-alone, it just renders a <code>Form</code>, so it must be assigned to a <code>Form</code> using the <code>layout</code> aggregation.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @deprecated Since version 1.67.0.
 * as <code>sap.ui.commons</code> library is deprecated and the <code>GridLayout</code> must not be used in responsive applications.
 * Please use <code>ResponsiveGridLayout</code> or <code>ColumnLayout</code> instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.GridLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.GridLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.layout.form.GridLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSingleColumn singleColumn}.
 * 
 * If set, the grid renders only one <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other. The whole grid has 8 cells per row.
 * 
 * If not set, <code>FormContainer</code> can use the full width of the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole grid has 16 cells per row.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>singleColumn</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.GridLayout.prototype.getSingleColumn = function() { return false; };

/**
 * Sets a new value for property {@link #getSingleColumn singleColumn}.
 * 
 * If set, the grid renders only one <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other. The whole grid has 8 cells per row.
 * 
 * If not set, <code>FormContainer</code> can use the full width of the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole grid has 16 cells per row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSingleColumn New value for property <code>singleColumn</code>
 * @returns {sap.ui.layout.form.GridLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.GridLayout.prototype.setSingleColumn = function(bSingleColumn) { return new sap.ui.layout.form.GridLayout(); };


// ---- sap.ui.layout.form.ResponsiveGridLayout --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.ui.layout.form.ResponsiveGridLayout</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabelSpanXL labelSpanXL} : int (default: -1)</li>
 * <li>{@link #getLabelSpanL labelSpanL} : int (default: 4)</li>
 * <li>{@link #getLabelSpanM labelSpanM} : int (default: 2)</li>
 * <li>{@link #getLabelSpanS labelSpanS} : int (default: 12)</li>
 * <li>{@link #getAdjustLabelSpan adjustLabelSpan} : boolean (default: true)</li>
 * <li>{@link #getEmptySpanXL emptySpanXL} : int (default: -1)</li>
 * <li>{@link #getEmptySpanL emptySpanL} : int (default: 0)</li>
 * <li>{@link #getEmptySpanM emptySpanM} : int (default: 0)</li>
 * <li>{@link #getEmptySpanS emptySpanS} : int (default: 0)</li>
 * <li>{@link #getColumnsXL columnsXL} : int (default: -1)</li>
 * <li>{@link #getColumnsL columnsL} : int (default: 2)</li>
 * <li>{@link #getColumnsM columnsM} : int (default: 1)</li>
 * <li>{@link #getSingleContainerFullSize singleContainerFullSize} : boolean (default: true)</li>
 * <li>{@link #getBreakpointXL breakpointXL} : int (default: 1440)</li>
 * <li>{@link #getBreakpointL breakpointL} : int (default: 1024)</li>
 * <li>{@link #getBreakpointM breakpointM} : int (default: 600)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormLayout#constructor sap.ui.layout.form.FormLayout}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>ResponsiveGridLayout</code> control renders a <code>Form</code> using a responsive grid. Internally the <code>Grid</code> control is used for rendering.
 * Using this layout, the <code>Form</code> is rendered in a responsive way.
 * Depending on the available space, the <code>FormContainers</code> are rendered in one or different columns and the labels are rendered in the same row as the fields or above the fields.
 * This behavior can be influenced by the properties of this layout control.
 * 
 * On the <code>FormContainers</code>, labels and content fields, <code>GridData</code> can be used to change the default rendering.
 * <code>GridData</code> is not supported for <code>FormElements</code>.
 * 
 * <b>Note:</b> If <code>GridData</code> is used, this may result in a much more complex layout than the default one.
 * This means that in some cases, the calculation for the other content may not bring the expected result.
 * In such cases, <code>GridData</code> should be used for all content controls to disable the default behavior.
 * 
 * This control cannot be used stand-alone, it just renders a <code>Form</code>, so it must be assigned to a <code>Form</code> using the <code>layout</code> aggregation.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.ResponsiveGridLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.
 * 
 * If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row.
 * If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label.
 * This is the same for medium and large <code>Forms</code>.
 * This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>
 * (because every <code>FormContainer</code> has its own <code>Grid</code> inside).
 * 
 * If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.
 * The number of <code>FormContainers</code> doesn't matter in this case.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>adjustLabelSpan</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getAdjustLabelSpan = function() { return false; };

/**
 * Gets current value of property {@link #getBreakpointL breakpointL}.
 * 
 * Breakpoint (in pixel) between Medium size and Large size.
 * 
 * Default value is <code>1024</code>.
 * @returns {int} Value of property <code>breakpointL</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getBreakpointL = function() { return 0; };

/**
 * Gets current value of property {@link #getBreakpointM breakpointM}.
 * 
 * Breakpoint (in pixel) between Small size and Medium size.
 * 
 * Default value is <code>600</code>.
 * @returns {int} Value of property <code>breakpointM</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getBreakpointM = function() { return 0; };

/**
 * Gets current value of property {@link #getBreakpointXL breakpointXL}.
 * 
 * Breakpoint (in pixel) between large size and extra large (XL) size.
 * 
 * Default value is <code>1440</code>.
 * @returns {int} Value of property <code>breakpointXL</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getBreakpointXL = function() { return 0; };

/**
 * Gets current value of property {@link #getColumnsL columnsL}.
 * 
 * Number of columns for large size.
 * 
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>columnsL</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getColumnsL = function() { return 0; };

/**
 * Gets current value of property {@link #getColumnsM columnsM}.
 * 
 * Number of columns for medium size.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>columnsM</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getColumnsM = function() { return 0; };

/**
 * Gets current value of property {@link #getColumnsXL columnsXL}.
 * 
 * Number of columns for extra large size.
 * 
 * The number of columns for extra large size must not be smaller than the number of columns for large size.
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>columnsXL</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getColumnsXL = function() { return 0; };

/**
 * Gets current value of property {@link #getEmptySpanL emptySpanL}.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanL</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanL = function() { return 0; };

/**
 * Gets current value of property {@link #getEmptySpanM emptySpanM}.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanM</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanM = function() { return 0; };

/**
 * Gets current value of property {@link #getEmptySpanS emptySpanS}.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanS</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanS = function() { return 0; };

/**
 * Gets current value of property {@link #getEmptySpanXL emptySpanXL}.
 * 
 * Number of grid cells that are empty at the end of each line on extra large size.
 * 
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>emptySpanXL</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanXL = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelSpanL labelSpanL}.
 * 
 * Default span for labels in large size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.
 * 
 * Default value is <code>4</code>.
 * @returns {int} Value of property <code>labelSpanL</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanL = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelSpanM labelSpanM}.
 * 
 * Default span for labels in medium size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpan</code> is set this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>labelSpanM</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanM = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelSpanS labelSpanS}.
 * 
 * Default span for labels in small size.
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>labelSpanS</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanS = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelSpanXL labelSpanXL}.
 * 
 * Default span for labels in extra large size.
 * 
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>labelSpanXL</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanXL = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.layout.form.ResponsiveGridLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.
 * 
 * If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set,
 * the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.
 * In this case the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.
 * 
 * In all other cases the <code>FormContainer</code> is displayed in the size of one column.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleContainerFullSize</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getSingleContainerFullSize = function() { return false; };

/**
 * Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.
 * 
 * If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row.
 * If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label.
 * This is the same for medium and large <code>Forms</code>.
 * This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>
 * (because every <code>FormContainer</code> has its own <code>Grid</code> inside).
 * 
 * If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.
 * The number of <code>FormContainers</code> doesn't matter in this case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAdjustLabelSpan New value for property <code>adjustLabelSpan</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setAdjustLabelSpan = function(bAdjustLabelSpan) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getBreakpointL breakpointL}.
 * 
 * Breakpoint (in pixel) between Medium size and Large size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1024</code>.
 * @param {int} iBreakpointL New value for property <code>breakpointL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setBreakpointL = function(iBreakpointL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getBreakpointM breakpointM}.
 * 
 * Breakpoint (in pixel) between Small size and Medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>600</code>.
 * @param {int} iBreakpointM New value for property <code>breakpointM</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setBreakpointM = function(iBreakpointM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getBreakpointXL breakpointXL}.
 * 
 * Breakpoint (in pixel) between large size and extra large (XL) size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1440</code>.
 * @param {int} iBreakpointXL New value for property <code>breakpointXL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setBreakpointXL = function(iBreakpointXL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getColumnsL columnsL}.
 * 
 * Number of columns for large size.
 * 
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iColumnsL New value for property <code>columnsL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setColumnsL = function(iColumnsL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getColumnsM columnsM}.
 * 
 * Number of columns for medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iColumnsM New value for property <code>columnsM</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setColumnsM = function(iColumnsM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getColumnsXL columnsXL}.
 * 
 * Number of columns for extra large size.
 * 
 * The number of columns for extra large size must not be smaller than the number of columns for large size.
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iColumnsXL New value for property <code>columnsXL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setColumnsXL = function(iColumnsXL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getEmptySpanL emptySpanL}.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanL New value for property <code>emptySpanL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanL = function(iEmptySpanL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getEmptySpanM emptySpanM}.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanM New value for property <code>emptySpanM</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanM = function(iEmptySpanM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getEmptySpanS emptySpanS}.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanS New value for property <code>emptySpanS</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanS = function(iEmptySpanS) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getEmptySpanXL emptySpanXL}.
 * 
 * Number of grid cells that are empty at the end of each line on extra large size.
 * 
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iEmptySpanXL New value for property <code>emptySpanXL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanXL = function(iEmptySpanXL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getLabelSpanL labelSpanL}.
 * 
 * Default span for labels in large size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>4</code>.
 * @param {int} iLabelSpanL New value for property <code>labelSpanL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanL = function(iLabelSpanL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getLabelSpanM labelSpanM}.
 * 
 * Default span for labels in medium size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpan</code> is set this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iLabelSpanM New value for property <code>labelSpanM</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanM = function(iLabelSpanM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getLabelSpanS labelSpanS}.
 * 
 * Default span for labels in small size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iLabelSpanS New value for property <code>labelSpanS</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanS = function(iLabelSpanS) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getLabelSpanXL labelSpanXL}.
 * 
 * Default span for labels in extra large size.
 * 
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iLabelSpanXL New value for property <code>labelSpanXL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanXL = function(iLabelSpanXL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.
 * 
 * If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set,
 * the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.
 * In this case the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.
 * 
 * In all other cases the <code>FormContainer</code> is displayed in the size of one column.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleContainerFullSize New value for property <code>singleContainerFullSize</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setSingleContainerFullSize = function(bSingleContainerFullSize) { return new sap.ui.layout.form.ResponsiveGridLayout(); };


// ---- sap.ui.layout.form.ResponsiveLayout --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.ResponsiveLayout.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>ResponsiveLayout</code> renders a <code>Form</code> with a responsive layout. Internally the <code>ResponsiveFlowLayout</code> is used.
 * The responsiveness of this layout tries to best use the available space. This means that the order of the <code>FormContainers</code>, labels and fields depends on the available space.
 * 
 * On the <code>FormContainers</code>, <code>FormElements</code>, labels and content fields, <code>ResponsiveFlowLayoutData</code> can be used to change the default rendering.
 * 
 * We suggest using the <code>ResponsiveGridLayout</code> instead of this layout because this is easier to consume and brings more stable responsive output.
 * 
 * <b>Note:</b> If <code>ResponsiveFlowLayoutData</code> are used this may result in a much more complex layout than the default one. This means that in some cases, the calculation for the other content may not bring the expected result.
 * In such cases, <code>ResponsiveFlowLayoutData</code> should be used for all content controls to disable the default behavior.
 * 
 * This control cannot be used stand-alone, it just renders a <code>Form</code>, so it must be assigned to a <code>Form</code> using the <code>layout</code> aggregation.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.ResponsiveLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.ResponsiveLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.layout.form.ResponsiveLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.layout.form.SimpleForm --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.SimpleForm.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMaxContainerCols maxContainerCols} : int (default: 2)</li>
 * <li>{@link #getMinWidth minWidth} : int (default: -1)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEditable editable} : boolean</li>
 * <li>{@link #getLabelMinWidth labelMinWidth} : int (default: 192)</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.form.SimpleFormLayout (default: ResponsiveLayout)</li>
 * <li>{@link #getLabelSpanXL labelSpanXL} : int (default: -1)</li>
 * <li>{@link #getLabelSpanL labelSpanL} : int (default: 4)</li>
 * <li>{@link #getLabelSpanM labelSpanM} : int (default: 2)</li>
 * <li>{@link #getLabelSpanS labelSpanS} : int (default: 12)</li>
 * <li>{@link #getAdjustLabelSpan adjustLabelSpan} : boolean (default: true)</li>
 * <li>{@link #getEmptySpanXL emptySpanXL} : int (default: -1)</li>
 * <li>{@link #getEmptySpanL emptySpanL} : int (default: 0)</li>
 * <li>{@link #getEmptySpanM emptySpanM} : int (default: 0)</li>
 * <li>{@link #getEmptySpanS emptySpanS} : int (default: 0)</li>
 * <li>{@link #getColumnsXL columnsXL} : int (default: -1)</li>
 * <li>{@link #getColumnsL columnsL} : int (default: 2)</li>
 * <li>{@link #getColumnsM columnsM} : int (default: 1)</li>
 * <li>{@link #getSingleContainerFullSize singleContainerFullSize} : boolean (default: true)</li>
 * <li>{@link #getBreakpointXL breakpointXL} : int (default: 1440)</li>
 * <li>{@link #getBreakpointL breakpointL} : int (default: 1024)</li>
 * <li>{@link #getBreakpointM breakpointM} : int (default: 600)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.ui.layout.BackgroundDesign (default: Translucent)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Element[] (default)</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title|string</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.core.Toolbar</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The <code>SimpleForm</code> control provides an easy-to-use API to create simple forms.
 * Inside a <code>SimpleForm</code> control, a <code>{@link sap.ui.layout.form.Form Form}</code> control is created along with its
 * <code>{@link sap.ui.layout.form.FormContainer FormContainer}</code> elements and <code>{@link sap.ui.layout.form.FormElement FormElement}</code> elements,
 * but the complexity in the API is not exposed to the user.
 * <ul>
 * <li>A new <code>sap.ui.core.Title</code> element or <code>Toolbar</code> control starts a new group (<code>{@link sap.ui.layout.form.FormContainer FormContainer}</code>) in the form.</li>
 * <li>A new <code>Label</code> control starts a new row (<code>{@link sap.ui.layout.form.FormElement FormElement}</code>) in the form.</li>
 * <li>All other controls will be assigned to the row (<code>{@link sap.ui.layout.form.FormElement FormElement}</code>) that started with the last label.</li>
 * </ul>
 * Use <code>LayoutData</code> to influence the layout for special cases in the Input/Display controls.
 * 
 * <b>Note:</b> If a more complex form is needed, use the <code>{@link sap.ui.layout.form.Form Form}</code> control instead.
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.SimpleForm = function(sId,mSettings) {};
/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Element}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.addContent = function(oContent) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.destroyContent = function() { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Destroys the title in the aggregation {@link #getTitle title}.
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.destroyTitle = function() { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.destroyToolbar = function() { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Creates a new subclass of class sap.ui.layout.form.SimpleForm with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.SimpleForm.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.
 * 
 * If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row.
 * If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label.
 * This is the same for medium and large <code>Forms</code>.
 * This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>
 * (because every <code>FormContainer</code> has its own grid inside).
 * 
 * If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.
 * The number of <code>FormContainers</code> doesn't matter in this case.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>adjustLabelSpan</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getAdjustLabelSpan = function() { return false; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Specifies the background color of the <code>SimpleForm</code> content.
 * 
 * The visualization of the different options depends on the used theme.
 * 
 * Default value is <code>Translucent</code>.
 * @returns {sap.ui.layout.BackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBackgroundDesign = function() { return new sap.ui.layout.BackgroundDesign(); };

/**
 * Gets current value of property {@link #getBreakpointL breakpointL}.
 * 
 * Breakpoint between Medium size and Large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>1024</code>.
 * @returns {int} Value of property <code>breakpointL</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBreakpointL = function() { return 0; };

/**
 * Gets current value of property {@link #getBreakpointM breakpointM}.
 * 
 * Breakpoint between Small size and Medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>600</code>.
 * @returns {int} Value of property <code>breakpointM</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBreakpointM = function() { return 0; };

/**
 * Gets current value of property {@link #getBreakpointXL breakpointXL}.
 * 
 * Breakpoint between Medium size and Large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>1440</code>.
 * @returns {int} Value of property <code>breakpointXL</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBreakpointXL = function() { return 0; };

/**
 * Gets current value of property {@link #getColumnsL columnsL}.
 * 
 * Form columns for large size.
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>columnsL</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getColumnsL = function() { return 0; };

/**
 * Gets current value of property {@link #getColumnsM columnsM}.
 * 
 * Form columns for medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>columnsM</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getColumnsM = function() { return 0; };

/**
 * Gets current value of property {@link #getColumnsXL columnsXL}.
 * 
 * Form columns for extra large size.
 * The number of columns for extra large size must not be smaller than the number of columns for large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.
 * If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>columnsXL</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getColumnsXL = function() { return 0; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content of the form is structured in the following way:
 * <ul>
 * <li>Add a <code>sap.ui.core.Title</code> element or <code>Toolbar</code> control to start a new group (<code>{@link sap.ui.layout.form.FormContainer FormContainer}</code>).</li>
 * <li>Add a <code>Label</code> control to start a new row (<code>{@link sap.ui.layout.form.FormElement FormElement}</code>).</li>
 * <li>Add controls as input fields, text fields or other as needed.</li>
 * <li>Use <code>LayoutData</code> to influence the layout for special cases in the single controls.
 * For example, if a <code>ResponsiveLayout</code> is used as a layout,
 * the form content is weighted using weight 3 for the labels and weight 5 for the fields part.
 * By default the label column is 192 pixels wide.
 * If your input controls should influence their width, you can add <code>sap.ui.layout.ResponsiveFlowLayoutData</code>
 * to them via <code>setLayoutData</code> method.
 * Ensure that the sum of the weights in the <code>ResponsiveFlowLayoutData</code> is not more than 5,
 * as this is the total width of the input control part of each form row.</li>
 * </ul>
 * Example for a row where the <code>Input</code> weight 4 and the second <code>Input</code> weight 1 (using <code>ResponsiveLayout</code>):
 * <pre>
 * new sap.m.Label({text:"Label"});
 * new sap.m.Input({value:"Weight 4", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
 * new sap.m.Input({value:"Weight 1", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),
 * </pre>
 * 
 * For example, if a <code>ResponsiveGridLayout</code> is used as a layout, there are 12 cells in one row.
 * Depending on the screen size the labels use the defined <code>labelSpan</code>.
 * The remaining cells are used for the fields (and <code>emptySpan</code> if defined).
 * The available cells are distributed to all fields in the row. If one field should use a fixed number of cells
 * you can add <code>sap.ui.layout.GridData</code> to them via <code>setLayoutData</code> method.
 * If there are additional fields in the row they will get the remaining cells.
 * </ul>
 * Example for a row with two <code>Input</code> controls where one uses four cells on small screens,
 * one cell on medium screens and 2 cells on larger screens (using <code>ResponsiveGridLayout</code>):
 * <pre>
 * new sap.m.Label({text:"Label"});
 * new sap.m.Input({value:"auto size"}),
 * new sap.m.Input({value:"fix size", layoutData: new sap.ui.layout.GridData({span: "XL1 L1 M2 S4"})}),
 * </pre>
 * 
 * <b>Warning:</b> Do not put any layout or other container controls in here. This could damage the visual layout,
 * keyboard support and screen-reader support. Only labels, titles, toolbars and form controls are allowed.
 * Views are also not supported. Allowed form controls implement the interface <code>sap.ui.core.IFormContent</code>.
 * 
 * If editable controls are used as content, the <code>editable</code> property must be set to <code>true</code>,
 * otherwise to <code>false</code>. If the <code>editable</code> property is set incorrectly, there will be visual issues
 * like wrong label alignment or wrong spacing between the controls.
 * 
 * @returns {sap.ui.core.Element[]}
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getEditable editable}.
 * 
 * Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content.
 * If set, all (not only the editable) rows of the form will get the line height of editable fields.
 * 
 * The labels inside the form will be rendered by default in the according mode.
 * 
 * <b>Note:</b> The setting of this property does not change the content of the form.
 * For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.
 * 
 * <b>Warning:</b> If this property is wrongly set, this might lead to visual issues.
 * The labels and fields might be misaligned, the labels might be rendered in the wrong mode,
 * and the spacing between the single controls might be wrong.
 * Also, controls that do not fit the mode might be rendered incorrectly.
 * 
 * @returns {boolean} Value of property <code>editable</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEditable = function() { return false; };

/**
 * Gets current value of property {@link #getEmptySpanL emptySpanL}.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.
 * If a <code>ColumnLayout</code> is used, this property defines the empty cells for large columns.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanL</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanL = function() { return 0; };

/**
 * Gets current value of property {@link #getEmptySpanM emptySpanM}.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanM</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanM = function() { return 0; };

/**
 * Gets current value of property {@link #getEmptySpanS emptySpanS}.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanS</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanS = function() { return 0; };

/**
 * Gets current value of property {@link #getEmptySpanXL emptySpanXL}.
 * 
 * Number of grid cells that are empty at the end of each line on extra large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used (from the backward compatibility reasons).
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>emptySpanXL</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanXL = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelMinWidth labelMinWidth}.
 * 
 * Specifies the min-width in pixels of the label in all form rows.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.
 * 
 * Default value is <code>192</code>.
 * @returns {int} Value of property <code>labelMinWidth</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelMinWidth = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelSpanL labelSpanL}.
 * 
 * Default span for labels in large size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line.
 * If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.
 * 
 * <b>Note:</b> This property is only used if <code>ResponsiveGridLayout</code> or <code>ColumnLayout</code> is used as a layout.
 * If a <code>ColumnLayout</code> is used, this property defines the label size for large columns.
 * 
 * Default value is <code>4</code>.
 * @returns {int} Value of property <code>labelSpanL</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanL = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelSpanM labelSpanM}.
 * 
 * Default span for labels in medium size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is used for full-size <code>FormContainers</code>.
 * If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>labelSpanM</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanM = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelSpanS labelSpanS}.
 * 
 * Default span for labels in small size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>labelSpanS</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanS = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelSpanXL labelSpanXL}.
 * 
 * Default span for labels in extra large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used (from the backward compatibility reasons).
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>labelSpanXL</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanXL = function() { return 0; };

/**
 * Gets current value of property {@link #getLayout layout}.
 * 
 * The <code>FormLayout</code> that is used to render the <code>SimpleForm</code>.
 * 
 * We recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>SimpleForm</code>,
 * as its responsiveness uses the space available in the best way possible.
 * 
 * <b>Note</b> If possible, set the <code>layout</code> before adding content to prevent calculations for the default layout.
 * 
 * Default value is <code>ResponsiveLayout</code>.
 * @returns {sap.ui.layout.form.SimpleFormLayout} Value of property <code>layout</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLayout = function() { return new sap.ui.layout.form.SimpleFormLayout(); };

/**
 * Gets current value of property {@link #getMaxContainerCols maxContainerCols}.
 * 
 * The maximum amount of groups (<code>{@link sap.ui.layout.form.FormContainer FormContainers}</code>) per row that is used before a new row is started.
 * 
 * <b>Note:</b> If <code>{@link sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout}</code> is used as <code>layout</code>, this property is not used.
 * Please use the properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>maxContainerCols</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getMaxContainerCols = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.layout.form.SimpleForm.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.SimpleForm.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinWidth minWidth}.
 * 
 * The overall minimum width in pixels that is used for the <code>SimpleForm</code>.
 * 
 * If the available width is below the given <code>minWidth</code> the <code>SimpleForm</code> will create a new row for the next group (<code>{@link sap.ui.layout.form.FormContainer FormContainer}</code>).
 * The default value is -1, meaning that inner groups (<code>{@link sap.ui.layout.form.FormContainer FormContainers}</code>) will be stacked until <code>maxContainerCols</code> is reached,
 * irrespective of whether a <code>width</code> is reached or the available parents width is reached.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>minWidth</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getMinWidth = function() { return 0; };

/**
 * Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.
 * 
 * If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set,
 * the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.
 * In this case the properties <code>columnsL</code> and <code>columnsM</code> are ignored.
 * 
 * In all other cases the <code>FormContainer</code> is displayed in the size of one column.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleContainerFullSize</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getSingleContainerFullSize = function() { return false; };

/**
 * Gets content of aggregation {@link #getTitle title}.
 * 
 * Title element of the <code>SimpleForm</code>. Can either be a <code>Title</code> element, or a string.
 * 
 * @returns {sap.ui.core.Title|string}
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * Gets content of aggregation {@link #getToolbar toolbar}.
 * 
 * Toolbar of the <code>SimpleForm</code>.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>.
 * In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.
 * 
 * @returns {sap.ui.core.Toolbar}
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getToolbar = function() { return new sap.ui.core.Toolbar(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the form.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @since 1.28.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Element}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Element}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Element[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Element} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Element} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeContent = function(vContent) { return new sap.ui.core.Element(); };

/**
 * Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.
 * 
 * If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row.
 * If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label.
 * This is the same for medium and large <code>Forms</code>.
 * This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>
 * (because every <code>FormContainer</code> has its own grid inside).
 * 
 * If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.
 * The number of <code>FormContainers</code> doesn't matter in this case.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAdjustLabelSpan New value for property <code>adjustLabelSpan</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setAdjustLabelSpan = function(bAdjustLabelSpan) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Specifies the background color of the <code>SimpleForm</code> content.
 * 
 * The visualization of the different options depends on the used theme.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Translucent</code>.
 * @param {sap.ui.layout.BackgroundDesign} sBackgroundDesign New value for property <code>backgroundDesign</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getBreakpointL breakpointL}.
 * 
 * Breakpoint between Medium size and Large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1024</code>.
 * @param {int} iBreakpointL New value for property <code>breakpointL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBreakpointL = function(iBreakpointL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getBreakpointM breakpointM}.
 * 
 * Breakpoint between Small size and Medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>600</code>.
 * @param {int} iBreakpointM New value for property <code>breakpointM</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBreakpointM = function(iBreakpointM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getBreakpointXL breakpointXL}.
 * 
 * Breakpoint between Medium size and Large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1440</code>.
 * @param {int} iBreakpointXL New value for property <code>breakpointXL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBreakpointXL = function(iBreakpointXL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getColumnsL columnsL}.
 * 
 * Form columns for large size.
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iColumnsL New value for property <code>columnsL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setColumnsL = function(iColumnsL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getColumnsM columnsM}.
 * 
 * Form columns for medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iColumnsM New value for property <code>columnsM</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setColumnsM = function(iColumnsM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getColumnsXL columnsXL}.
 * 
 * Form columns for extra large size.
 * The number of columns for extra large size must not be smaller than the number of columns for large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.
 * If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iColumnsXL New value for property <code>columnsXL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setColumnsXL = function(iColumnsXL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getEditable editable}.
 * 
 * Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content.
 * If set, all (not only the editable) rows of the form will get the line height of editable fields.
 * 
 * The labels inside the form will be rendered by default in the according mode.
 * 
 * <b>Note:</b> The setting of this property does not change the content of the form.
 * For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.
 * 
 * <b>Warning:</b> If this property is wrongly set, this might lead to visual issues.
 * The labels and fields might be misaligned, the labels might be rendered in the wrong mode,
 * and the spacing between the single controls might be wrong.
 * Also, controls that do not fit the mode might be rendered incorrectly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bEditable New value for property <code>editable</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEditable = function(bEditable) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getEmptySpanL emptySpanL}.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.
 * If a <code>ColumnLayout</code> is used, this property defines the empty cells for large columns.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanL New value for property <code>emptySpanL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanL = function(iEmptySpanL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getEmptySpanM emptySpanM}.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanM New value for property <code>emptySpanM</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanM = function(iEmptySpanM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getEmptySpanS emptySpanS}.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanS New value for property <code>emptySpanS</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanS = function(iEmptySpanS) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getEmptySpanXL emptySpanXL}.
 * 
 * Number of grid cells that are empty at the end of each line on extra large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used (from the backward compatibility reasons).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iEmptySpanXL New value for property <code>emptySpanXL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanXL = function(iEmptySpanXL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getLabelMinWidth labelMinWidth}.
 * 
 * Specifies the min-width in pixels of the label in all form rows.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>192</code>.
 * @param {int} iLabelMinWidth New value for property <code>labelMinWidth</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelMinWidth = function(iLabelMinWidth) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getLabelSpanL labelSpanL}.
 * 
 * Default span for labels in large size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line.
 * If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.
 * 
 * <b>Note:</b> This property is only used if <code>ResponsiveGridLayout</code> or <code>ColumnLayout</code> is used as a layout.
 * If a <code>ColumnLayout</code> is used, this property defines the label size for large columns.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>4</code>.
 * @param {int} iLabelSpanL New value for property <code>labelSpanL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanL = function(iLabelSpanL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getLabelSpanM labelSpanM}.
 * 
 * Default span for labels in medium size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is used for full-size <code>FormContainers</code>.
 * If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iLabelSpanM New value for property <code>labelSpanM</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanM = function(iLabelSpanM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getLabelSpanS labelSpanS}.
 * 
 * Default span for labels in small size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iLabelSpanS New value for property <code>labelSpanS</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanS = function(iLabelSpanS) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getLabelSpanXL labelSpanXL}.
 * 
 * Default span for labels in extra large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used (from the backward compatibility reasons).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iLabelSpanXL New value for property <code>labelSpanXL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanXL = function(iLabelSpanXL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getLayout layout}.
 * 
 * The <code>FormLayout</code> that is used to render the <code>SimpleForm</code>.
 * 
 * We recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>SimpleForm</code>,
 * as its responsiveness uses the space available in the best way possible.
 * 
 * <b>Note</b> If possible, set the <code>layout</code> before adding content to prevent calculations for the default layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>ResponsiveLayout</code>.
 * @param {sap.ui.layout.form.SimpleFormLayout} sLayout New value for property <code>layout</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLayout = function(sLayout) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getMaxContainerCols maxContainerCols}.
 * 
 * The maximum amount of groups (<code>{@link sap.ui.layout.form.FormContainer FormContainers}</code>) per row that is used before a new row is started.
 * 
 * <b>Note:</b> If <code>{@link sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout}</code> is used as <code>layout</code>, this property is not used.
 * Please use the properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iMaxContainerCols New value for property <code>maxContainerCols</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setMaxContainerCols = function(iMaxContainerCols) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getMinWidth minWidth}.
 * 
 * The overall minimum width in pixels that is used for the <code>SimpleForm</code>.
 * 
 * If the available width is below the given <code>minWidth</code> the <code>SimpleForm</code> will create a new row for the next group (<code>{@link sap.ui.layout.form.FormContainer FormContainer}</code>).
 * The default value is -1, meaning that inner groups (<code>{@link sap.ui.layout.form.FormContainer FormContainers}</code>) will be stacked until <code>maxContainerCols</code> is reached,
 * irrespective of whether a <code>width</code> is reached or the available parents width is reached.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iMinWidth New value for property <code>minWidth</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setMinWidth = function(iMinWidth) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.
 * 
 * If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set,
 * the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.
 * In this case the properties <code>columnsL</code> and <code>columnsM</code> are ignored.
 * 
 * In all other cases the <code>FormContainer</code> is displayed in the size of one column.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleContainerFullSize New value for property <code>singleContainerFullSize</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setSingleContainerFullSize = function(bSingleContainerFullSize) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets the aggregated {@link #getTitle title}.
 * @param {sap.ui.core.Title|string} vTitle The title to set
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setTitle = function(vTitle) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets the aggregated {@link #getToolbar toolbar}.
 * @param {sap.ui.core.Toolbar} oToolbar The toolbar to set
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setToolbar = function(oToolbar) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of the form.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * 
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setWidth = function(sWidth) { return new sap.ui.layout.form.SimpleForm(); };


// ---- sap.ui.layout.form.SimpleFormLayout --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.form.SimpleFormLayout.toString = function() { return ""; };

// ---- sap.ui.layout.Grid --------------------------------------------------------------------------

/**
 * Constructor for a new <code>Grid</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getVSpacing vSpacing} : float (default: 1)</li>
 * <li>{@link #getHSpacing hSpacing} : float (default: 1)</li>
 * <li>{@link #getPosition position} : sap.ui.layout.GridPosition (default: Left)</li>
 * <li>{@link #getDefaultSpan defaultSpan} : sap.ui.layout.GridSpan (default: XL3 L3 M6 S12)</li>
 * <li>{@link #getDefaultIndent defaultIndent} : sap.ui.layout.GridIndent (default: XL0 L0 M0 S0)</li>
 * <li>{@link #getContainerQuery containerQuery} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A layout control which positions its child controls in a 12 column flow layout.
 * 
 * The <code>Grid</code> control's children can be specified to take on a variable
 * amount of columns depending on available screen size. With this control it is possible
 * to achieve flexible layouts and line-breaks for extra large-, large-, medium- and
 * small-sized screens, such as large desktop, desktop, tablet, and mobile.
 * 
 * The <code>Grid</code> control's width can be percentage- or pixel-based and the spacing between
 * its columns can be set to various predefined values.
 * 
 * <b>Notes:</b>
 * <ul>
 * <li>The visibility of the child control does not affect the horizontal space it
 * occupies, meaning that even if the control is not visible, its horizontal space
 * still exists, even if it is empty.</li>
 * <li> If it gets wider, the content of the columns is designed to overflow outside
 * of its dimensions. An additional <code>sapUiRespGridOverflowHidden</code> CSS class
 * should be added to the control in order to hide the overflowing part of it.</li>
 * </ul>
 * 
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/grid-layout/#responsive-grid Grid}
 * 
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.15.0
 * @see {@link topic:43ae317cf39640a88bc8be979d2671df Grid}
 * @see {@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.Grid = function(sId,mSettings) {};
/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48.7
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.layout.Grid(); };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.addContent = function(oContent) { return new sap.ui.layout.Grid(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.destroyContent = function() { return new sap.ui.layout.Grid(); };

/**
 * Creates a new subclass of class sap.ui.layout.Grid with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.Grid.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns the <code>Grid</code> accessibility information.
 * @see sap.ui.core.Control#getAccessibilityInfo
 * @protected
 * @returns {object} The <code>Grid</code> accessibility information
 * 
 */
sap.ui.layout.Grid.prototype.getAccessibilityInfo = function() { return new Object(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.48.7
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getContainerQuery containerQuery}.
 * 
 * If set to <code>true</code>, the current range (large, medium or small) is defined by the size of the
 * container surrounding the <code>Grid</code> instead of the device screen size (media Query).
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>containerQuery</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getContainerQuery = function() { return false; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Controls that are placed into Grid layout.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDefaultIndent defaultIndent}.
 * 
 * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins.
 * It can be defined for large, medium and small screens. Allowed values are separated by space Letters
 * L, M or S followed by number of columns from 0 to 11 that the container has to take, for example,
 * <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.
 * 
 * <b>Note:</b> The parameters must be provided in the order <large medium small>.
 * 
 * Default value is <code>XL0 L0 M0 S0</code>.
 * @returns {sap.ui.layout.GridIndent} Value of property <code>defaultIndent</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getDefaultIndent = function() { return new sap.ui.layout.GridIndent(); };

/**
 * Gets current value of property {@link #getDefaultSpan defaultSpan}.
 * 
 * Optional. A string type that represents the span values of the <code>Grid</code> for
 * large, medium and small screens. Allowed values are separated by space Letters L, M or S followed
 * by number of columns from 1 to 12 that the container has to take, for example, <code>L2 M4 S6</code>,
 * <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.
 * 
 * <b>Note:</b> The parameters must be provided in the order <large medium small>.
 * 
 * Default value is <code>XL3 L3 M6 S12</code>.
 * @returns {sap.ui.layout.GridSpan} Value of property <code>defaultSpan</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getDefaultSpan = function() { return new sap.ui.layout.GridSpan(); };

/**
 * Gets current value of property {@link #getHSpacing hSpacing}.
 * 
 * Optional. Defines the horizontal spacing between the content in the <code>Grid</code>.
 * In rem, allowed values are 0, 0.5 , 1 or 2.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>hSpacing</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getHSpacing = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.ui.layout.Grid.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.Grid.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPosition position}.
 * 
 * Optional. Defines the position of the <code>Grid</code> in the window or surrounding container.
 * 
 * Default value is <code>Left</code>.
 * @returns {sap.ui.layout.GridPosition} Value of property <code>position</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getPosition = function() { return new sap.ui.layout.GridPosition(); };

/**
 * Gets current value of property {@link #getVSpacing vSpacing}.
 * 
 * Optional. Defines the vertical spacing between the rows in the <code>Grid</code>.
 * In rem, allowed values are 0, 0.5, 1 and 2.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>vSpacing</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getVSpacing = function() { return 0.0; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Optional. Defines the width of the <code>Grid</code>. If not specified, then 100%.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Control}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.Grid(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.48.7
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.48.7
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getContainerQuery containerQuery}.
 * 
 * If set to <code>true</code>, the current range (large, medium or small) is defined by the size of the
 * container surrounding the <code>Grid</code> instead of the device screen size (media Query).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bContainerQuery New value for property <code>containerQuery</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setContainerQuery = function(bContainerQuery) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property {@link #getDefaultIndent defaultIndent}.
 * 
 * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins.
 * It can be defined for large, medium and small screens. Allowed values are separated by space Letters
 * L, M or S followed by number of columns from 0 to 11 that the container has to take, for example,
 * <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.
 * 
 * <b>Note:</b> The parameters must be provided in the order <large medium small>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>XL0 L0 M0 S0</code>.
 * @param {sap.ui.layout.GridIndent} sDefaultIndent New value for property <code>defaultIndent</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setDefaultIndent = function(sDefaultIndent) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property {@link #getDefaultSpan defaultSpan}.
 * 
 * Optional. A string type that represents the span values of the <code>Grid</code> for
 * large, medium and small screens. Allowed values are separated by space Letters L, M or S followed
 * by number of columns from 1 to 12 that the container has to take, for example, <code>L2 M4 S6</code>,
 * <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.
 * 
 * <b>Note:</b> The parameters must be provided in the order <large medium small>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>XL3 L3 M6 S12</code>.
 * @param {sap.ui.layout.GridSpan} sDefaultSpan New value for property <code>defaultSpan</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setDefaultSpan = function(sDefaultSpan) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property {@link #getHSpacing hSpacing}.
 * 
 * Optional. Defines the horizontal spacing between the content in the <code>Grid</code>.
 * In rem, allowed values are 0, 0.5 , 1 or 2.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fHSpacing New value for property <code>hSpacing</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setHSpacing = function(fHSpacing) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property {@link #getPosition position}.
 * 
 * Optional. Defines the position of the <code>Grid</code> in the window or surrounding container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Left</code>.
 * @param {sap.ui.layout.GridPosition} sPosition New value for property <code>position</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setPosition = function(sPosition) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property {@link #getVSpacing vSpacing}.
 * 
 * Optional. Defines the vertical spacing between the rows in the <code>Grid</code>.
 * In rem, allowed values are 0, 0.5, 1 and 2.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fVSpacing New value for property <code>vSpacing</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setVSpacing = function(fVSpacing) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Optional. Defines the width of the <code>Grid</code>. If not specified, then 100%.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setWidth = function(sWidth) { return new sap.ui.layout.Grid(); };


// ---- sap.ui.layout.GridData --------------------------------------------------------------------------

/**
 * Constructor for a new <code>GridData</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSpan span} : sap.ui.layout.GridSpan</li>
 * <li>{@link #getSpanXL spanXL} : int</li>
 * <li>{@link #getSpanL spanL} : int</li>
 * <li>{@link #getSpanM spanM} : int</li>
 * <li>{@link #getSpanS spanS} : int</li>
 * <li>{@link #getIndent indent} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getIndentXL indentXL} : int</li>
 * <li>{@link #getIndentL indentL} : int</li>
 * <li>{@link #getIndentM indentM} : int</li>
 * <li>{@link #getIndentS indentS} : int</li>
 * <li>{@link #getVisibleXL visibleXL} : boolean (default: true)</li>
 * <li>{@link #getVisibleL visibleL} : boolean (default: true)</li>
 * <li>{@link #getVisibleM visibleM} : boolean (default: true)</li>
 * <li>{@link #getVisibleS visibleS} : boolean (default: true)</li>
 * <li>{@link #getMoveBackwards moveBackwards} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getMoveForward moveForward} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getLinebreak linebreak} : boolean (default: false)</li>
 * <li>{@link #getLinebreakXL linebreakXL} : boolean (default: false)</li>
 * <li>{@link #getLinebreakL linebreakL} : boolean (default: false)</li>
 * <li>{@link #getLinebreakM linebreakM} : boolean (default: false)</li>
 * <li>{@link #getLinebreakS linebreakS} : boolean (default: false)</li>
 * <li>{@link #getSpanLarge spanLarge} : int</li>
 * <li>{@link #getSpanMedium spanMedium} : int</li>
 * <li>{@link #getSpanSmall spanSmall} : int</li>
 * <li>{@link #getIndentLarge indentLarge} : int</li>
 * <li>{@link #getIndentMedium indentMedium} : int</li>
 * <li>{@link #getIndentSmall indentSmall} : int</li>
 * <li>{@link #getVisibleOnLarge visibleOnLarge} : boolean (default: true)</li>
 * <li>{@link #getVisibleOnMedium visibleOnMedium} : boolean (default: true)</li>
 * <li>{@link #getVisibleOnSmall visibleOnSmall} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines layout data for the {@link sap.ui.layout.Grid}.
 * 
 * <b>Note:</b> When <code>GridData</code> is used for controls inside a form,
 * the <code>linebreak</code> property has to be set to <code>true</code> if the
 * next form element has to be displayed on a new line. Otherwise the <code>GridData</code>
 * overrides the layout provided by the <code>Form</code>.
 * 
 * @extends sap.ui.core.LayoutData
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.15.0
 * @see {@link topic:43ae317cf39640a88bc8be979d2671df Grid}
 * @see {@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.GridData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.GridData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.GridData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getIndent indent}.
 * 
 * A string type that represents the indent values of the <code>Grid</code> for large, medium and small screens.
 * 
 * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11
 * that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code>
 * or <code>l4 m4</code>.
 * 
 * <b>Note:</b> The parameters must be provided in the order <large medium small>.
 * 
 * @returns {sap.ui.layout.GridIndent} Value of property <code>indent</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndent = function() { return new sap.ui.layout.GridIndent(); };

/**
 * Gets current value of property {@link #getIndentL indentL}.
 * 
 * Optional. Defines an indent value for large screens.
 * This value overwrites the value for large screens defined in the <code>indent</code> property.
 * 
 * @returns {int} Value of property <code>indentL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentL = function() { return 0; };

/**
 * Gets current value of property {@link #getIndentLarge indentLarge}.
 * 
 * Deprecated. Defines an indent value for large screens.
 * This value overwrites the value for large screens defined in the <code>indent</code> property.
 * 
 * @returns {int} Value of property <code>indentLarge</code>
 * 
 * @deprecated As of version 1.17.1. Use the <code>indentL</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentLarge = function() { return 0; };

/**
 * Gets current value of property {@link #getIndentM indentM}.
 * 
 * Optional. Defines an indent value for medium size screens.
 * This value overwrites the value for medium screens defined in the <code>indent</code> property.
 * 
 * @returns {int} Value of property <code>indentM</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentM = function() { return 0; };

/**
 * Gets current value of property {@link #getIndentMedium indentMedium}.
 * 
 * Deprecated. Defines an indent value for medium screens.
 * This value overwrites the value for medium screens defined in the <code>indent</code> property.
 * 
 * @returns {int} Value of property <code>indentMedium</code>
 * 
 * @deprecated As of version 1.17.1. Use the <code>indentM</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentMedium = function() { return 0; };

/**
 * Gets current value of property {@link #getIndentS indentS}.
 * 
 * Optional. Defines an indent value for small screens.
 * This value overwrites the value for small screens defined in the <code>indent</code> property.
 * 
 * @returns {int} Value of property <code>indentS</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentS = function() { return 0; };

/**
 * Gets current value of property {@link #getIndentSmall indentSmall}.
 * 
 * Deprecated. Defines an indent value for small screens.
 * This value overwrites the value for small screens defined in the <code>indent</code> property.
 * 
 * @returns {int} Value of property <code>indentSmall</code>
 * 
 * @deprecated As of version 1.17.1. Use <code>indentS</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentSmall = function() { return 0; };

/**
 * Gets current value of property {@link #getIndentXL indentXL}.
 * 
 * Optional. Defines an indent value for extra large screens.
 * This value overwrites the value for extra large screens defined in the <code>indent</code> property.
 * 
 * @returns {int} Value of property <code>indentXL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentXL = function() { return 0; };

/**
 * Gets current value of property {@link #getLinebreak linebreak}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on all-size screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreak</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreak = function() { return false; };

/**
 * Gets current value of property {@link #getLinebreakL linebreakL}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on large screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreakL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakL = function() { return false; };

/**
 * Gets current value of property {@link #getLinebreakM linebreakM}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on medium screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreakM</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakM = function() { return false; };

/**
 * Gets current value of property {@link #getLinebreakS linebreakS}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on small screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreakS</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakS = function() { return false; };

/**
 * Gets current value of property {@link #getLinebreakXL linebreakXL}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on extra large screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreakXL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakXL = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.GridData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.GridData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMoveBackwards moveBackwards}.
 * 
 * Optional. Moves a cell backwards with as many columns as specified.
 * 
 * @returns {sap.ui.layout.GridIndent} Value of property <code>moveBackwards</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getMoveBackwards = function() { return new sap.ui.layout.GridIndent(); };

/**
 * Gets current value of property {@link #getMoveForward moveForward}.
 * 
 * Optional. Moves a cell forwards with as many columns as specified.
 * 
 * @returns {sap.ui.layout.GridIndent} Value of property <code>moveForward</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getMoveForward = function() { return new sap.ui.layout.GridIndent(); };

/**
 * Gets current value of property {@link #getSpan span}.
 * 
 * A string type that represents the span values of the <code>Grid</code> for large, medium and small screens.
 * 
 * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12
 * that the container has to take, for example: <code>L2 M4 S6</code>, <code>M12</code>,
 * <code>s10</code> or <code>l4 m4</code>.
 * 
 * <b>Note:</b> The parameters must be provided in the order <large medium small>.
 * 
 * @returns {sap.ui.layout.GridSpan} Value of property <code>span</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpan = function() { return new sap.ui.layout.GridSpan(); };

/**
 * Gets current value of property {@link #getSpanL spanL}.
 * 
 * Optional. Defines a span value for large screens.
 * This value overwrites the value for large screens defined in the <code>span</code> property.
 * 
 * @returns {int} Value of property <code>spanL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanL = function() { return 0; };

/**
 * Gets current value of property {@link #getSpanLarge spanLarge}.
 * 
 * Deprecated. Defines a span value for large screens.
 * This value overwrites the value for large screens defined in the <code>span</code> property.
 * 
 * @returns {int} Value of property <code>spanLarge</code>
 * 
 * @deprecated As of version 1.17.1. Use the <code>spanL</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanLarge = function() { return 0; };

/**
 * Gets current value of property {@link #getSpanM spanM}.
 * 
 * Optional. Defines a span value for medium size screens.
 * This value overwrites the value for medium screens defined in the <code>span</code> property.
 * 
 * @returns {int} Value of property <code>spanM</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanM = function() { return 0; };

/**
 * Gets current value of property {@link #getSpanMedium spanMedium}.
 * 
 * Deprecated. Defines a span value for medium screens.
 * This value overwrites the value for medium screens defined in the <code>span</code> property.
 * 
 * @returns {int} Value of property <code>spanMedium</code>
 * 
 * @deprecated As of version 1.17.1. Use the <code>spanM</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanMedium = function() { return 0; };

/**
 * Gets current value of property {@link #getSpanS spanS}.
 * 
 * Optional. Defines a span value for small screens.
 * This value overwrites the value for small screens defined in the <code>span</code> property.
 * 
 * @returns {int} Value of property <code>spanS</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanS = function() { return 0; };

/**
 * Gets current value of property {@link #getSpanSmall spanSmall}.
 * 
 * Deprecated. Defines a span value for small screens.
 * This value overwrites the value for small screens defined in the <code>span</code> property.
 * 
 * @returns {int} Value of property <code>spanSmall</code>
 * 
 * @deprecated As of version 1.17.1. Use the <code>spanS</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanSmall = function() { return 0; };

/**
 * Gets current value of property {@link #getSpanXL spanXL}.
 * 
 * Optional. Defines a span value for extra large screens.
 * This value overwrites the value for extra large screens defined in the <code>span</code> property.
 * 
 * @returns {int} Value of property <code>spanXL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanXL = function() { return 0; };

/**
 * Gets current value of property {@link #getVisibleL visibleL}.
 * 
 * Defines if this control is visible on large screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleL = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleM visibleM}.
 * 
 * Defines if this control is visible on medium screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleM</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleM = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleOnLarge visibleOnLarge}.
 * 
 * Deprecated. Defines if this control is visible on large screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleOnLarge</code>
 * 
 * @deprecated As of version 1.17.1. Use the <code>visibleL</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleOnLarge = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleOnMedium visibleOnMedium}.
 * 
 * Deprecated. Defines if this control is visible on medium screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleOnMedium</code>
 * 
 * @deprecated As of version 1.17.1. Use the <code>visibleM</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleOnMedium = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleOnSmall visibleOnSmall}.
 * 
 * Deprecated. Defines if this control is visible on small screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleOnSmall</code>
 * 
 * @deprecated As of version 1.17.1. Use the <code>visibleS</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleOnSmall = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleS visibleS}.
 * 
 * Defines if this control is visible on small screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleS</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleS = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleXL visibleXL}.
 * 
 * Defines if this control is visible on extra Large screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleXL</code>
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleXL = function() { return false; };

/**
 * Sets a new value for property {@link #getIndent indent}.
 * 
 * A string type that represents the indent values of the <code>Grid</code> for large, medium and small screens.
 * 
 * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11
 * that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code>
 * or <code>l4 m4</code>.
 * 
 * <b>Note:</b> The parameters must be provided in the order <large medium small>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.layout.GridIndent} sIndent New value for property <code>indent</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndent = function(sIndent) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getIndentL indentL}.
 * 
 * Optional. Defines an indent value for large screens.
 * This value overwrites the value for large screens defined in the <code>indent</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iIndentL New value for property <code>indentL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentL = function(iIndentL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getIndentLarge indentLarge}.
 * 
 * Deprecated. Defines an indent value for large screens.
 * This value overwrites the value for large screens defined in the <code>indent</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iIndentLarge New value for property <code>indentLarge</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.17.1. Use the <code>indentL</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentLarge = function(iIndentLarge) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getIndentM indentM}.
 * 
 * Optional. Defines an indent value for medium size screens.
 * This value overwrites the value for medium screens defined in the <code>indent</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iIndentM New value for property <code>indentM</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentM = function(iIndentM) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getIndentMedium indentMedium}.
 * 
 * Deprecated. Defines an indent value for medium screens.
 * This value overwrites the value for medium screens defined in the <code>indent</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iIndentMedium New value for property <code>indentMedium</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.17.1. Use the <code>indentM</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentMedium = function(iIndentMedium) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getIndentS indentS}.
 * 
 * Optional. Defines an indent value for small screens.
 * This value overwrites the value for small screens defined in the <code>indent</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iIndentS New value for property <code>indentS</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentS = function(iIndentS) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getIndentSmall indentSmall}.
 * 
 * Deprecated. Defines an indent value for small screens.
 * This value overwrites the value for small screens defined in the <code>indent</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iIndentSmall New value for property <code>indentSmall</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.17.1. Use <code>indentS</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentSmall = function(iIndentSmall) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getIndentXL indentXL}.
 * 
 * Optional. Defines an indent value for extra large screens.
 * This value overwrites the value for extra large screens defined in the <code>indent</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iIndentXL New value for property <code>indentXL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentXL = function(iIndentXL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getLinebreak linebreak}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on all-size screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreak New value for property <code>linebreak</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreak = function(bLinebreak) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getLinebreakL linebreakL}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on large screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreakL New value for property <code>linebreakL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakL = function(bLinebreakL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getLinebreakM linebreakM}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on medium screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreakM New value for property <code>linebreakM</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakM = function(bLinebreakM) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getLinebreakS linebreakS}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on small screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreakS New value for property <code>linebreakS</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakS = function(bLinebreakS) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getLinebreakXL linebreakXL}.
 * 
 * Optional. If set to <code>true</code>, the control causes a line break on extra large screens
 * within the <code>Grid</code> and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreakXL New value for property <code>linebreakXL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakXL = function(bLinebreakXL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getMoveBackwards moveBackwards}.
 * 
 * Optional. Moves a cell backwards with as many columns as specified.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.layout.GridIndent} sMoveBackwards New value for property <code>moveBackwards</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setMoveBackwards = function(sMoveBackwards) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getMoveForward moveForward}.
 * 
 * Optional. Moves a cell forwards with as many columns as specified.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.layout.GridIndent} sMoveForward New value for property <code>moveForward</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setMoveForward = function(sMoveForward) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getSpan span}.
 * 
 * A string type that represents the span values of the <code>Grid</code> for large, medium and small screens.
 * 
 * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12
 * that the container has to take, for example: <code>L2 M4 S6</code>, <code>M12</code>,
 * <code>s10</code> or <code>l4 m4</code>.
 * 
 * <b>Note:</b> The parameters must be provided in the order <large medium small>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.layout.GridSpan} sSpan New value for property <code>span</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpan = function(sSpan) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getSpanL spanL}.
 * 
 * Optional. Defines a span value for large screens.
 * This value overwrites the value for large screens defined in the <code>span</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iSpanL New value for property <code>spanL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanL = function(iSpanL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getSpanLarge spanLarge}.
 * 
 * Deprecated. Defines a span value for large screens.
 * This value overwrites the value for large screens defined in the <code>span</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iSpanLarge New value for property <code>spanLarge</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.17.1. Use the <code>spanL</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanLarge = function(iSpanLarge) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getSpanM spanM}.
 * 
 * Optional. Defines a span value for medium size screens.
 * This value overwrites the value for medium screens defined in the <code>span</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iSpanM New value for property <code>spanM</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanM = function(iSpanM) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getSpanMedium spanMedium}.
 * 
 * Deprecated. Defines a span value for medium screens.
 * This value overwrites the value for medium screens defined in the <code>span</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iSpanMedium New value for property <code>spanMedium</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.17.1. Use the <code>spanM</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanMedium = function(iSpanMedium) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getSpanS spanS}.
 * 
 * Optional. Defines a span value for small screens.
 * This value overwrites the value for small screens defined in the <code>span</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iSpanS New value for property <code>spanS</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanS = function(iSpanS) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getSpanSmall spanSmall}.
 * 
 * Deprecated. Defines a span value for small screens.
 * This value overwrites the value for small screens defined in the <code>span</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iSpanSmall New value for property <code>spanSmall</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.17.1. Use the <code>spanS</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanSmall = function(iSpanSmall) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getSpanXL spanXL}.
 * 
 * Optional. Defines a span value for extra large screens.
 * This value overwrites the value for extra large screens defined in the <code>span</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iSpanXL New value for property <code>spanXL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanXL = function(iSpanXL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getVisibleL visibleL}.
 * 
 * Defines if this control is visible on large screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleL New value for property <code>visibleL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleL = function(bVisibleL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getVisibleM visibleM}.
 * 
 * Defines if this control is visible on medium screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleM New value for property <code>visibleM</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleM = function(bVisibleM) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getVisibleOnLarge visibleOnLarge}.
 * 
 * Deprecated. Defines if this control is visible on large screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleOnLarge New value for property <code>visibleOnLarge</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.17.1. Use the <code>visibleL</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleOnLarge = function(bVisibleOnLarge) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getVisibleOnMedium visibleOnMedium}.
 * 
 * Deprecated. Defines if this control is visible on medium screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleOnMedium New value for property <code>visibleOnMedium</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.17.1. Use the <code>visibleM</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleOnMedium = function(bVisibleOnMedium) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getVisibleOnSmall visibleOnSmall}.
 * 
 * Deprecated. Defines if this control is visible on small screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleOnSmall New value for property <code>visibleOnSmall</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.17.1. Use the <code>visibleS</code> property instead.
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleOnSmall = function(bVisibleOnSmall) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getVisibleS visibleS}.
 * 
 * Defines if this control is visible on small screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleS New value for property <code>visibleS</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleS = function(bVisibleS) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property {@link #getVisibleXL visibleXL}.
 * 
 * Defines if this control is visible on extra Large screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleXL New value for property <code>visibleXL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleXL = function(bVisibleXL) { return new sap.ui.layout.GridData(); };


// ---- sap.ui.layout.GridIndent --------------------------------------------------------------------------


// ---- sap.ui.layout.GridPosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.GridPosition.toString = function() { return ""; };

// ---- sap.ui.layout.GridSpan --------------------------------------------------------------------------


// ---- sap.ui.layout.HorizontalLayout --------------------------------------------------------------------------

/**
 * Constructor for a new HorizontalLayout.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getAllowWrapping allowWrapping} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * A layout that provides support for horizontal alignment of controls
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.HorizontalLayout = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.HorizontalLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.addContent = function(oContent) { return new sap.ui.layout.HorizontalLayout(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.layout.HorizontalLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.destroyContent = function() { return new sap.ui.layout.HorizontalLayout(); };

/**
 * Creates a new subclass of class sap.ui.layout.HorizontalLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.HorizontalLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * @see sap.ui.core.Control#getAccessibilityInfo
 * @returns {object} Current accessibility state of the control
 * @protected
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.getAccessibilityInfo = function() { return new Object(); };

/**
 * Gets current value of property {@link #getAllowWrapping allowWrapping}.
 * 
 * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>allowWrapping</code>
 * 
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.getAllowWrapping = function() { return false; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The controls inside this layout
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.HorizontalLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.HorizontalLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Control}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.HorizontalLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.HorizontalLayout(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getAllowWrapping allowWrapping}.
 * 
 * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAllowWrapping New value for property <code>allowWrapping</code>
 * @returns {sap.ui.layout.HorizontalLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.setAllowWrapping = function(bAllowWrapping) { return new sap.ui.layout.HorizontalLayout(); };


// ---- sap.ui.layout.PaneContainer --------------------------------------------------------------------------

/**
 * Constructor for a new PaneContainer.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getOrientation orientation} : sap.ui.core.Orientation (default: Horizontal)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPanes panes} : sap.ui.core.Element[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * PaneContainer is an abstraction of Splitter.
 * 
 * Could be used as an aggregation of ResponsiveSplitter or other PaneContainers.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.38
 * 
 */
sap.ui.layout.PaneContainer = function(sId,mSettings) {};
/**
 * Adds some pane to the aggregation {@link #getPanes panes}.
 * @param {sap.ui.core.Element}
 *            oPane The pane to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.PaneContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.PaneContainer.prototype.addPane = function(oPane) { return new sap.ui.layout.PaneContainer(); };

/**
 * Destroys all the panes in the aggregation {@link #getPanes panes}.
 * @returns {sap.ui.layout.PaneContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.PaneContainer.prototype.destroyPanes = function() { return new sap.ui.layout.PaneContainer(); };

/**
 * Creates a new subclass of class sap.ui.layout.PaneContainer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.PaneContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.layout.PaneContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.PaneContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getOrientation orientation}.
 * 
 * The orientation of the Splitter
 * 
 * Default value is <code>Horizontal</code>.
 * @returns {sap.ui.core.Orientation} Value of property <code>orientation</code>
 * 
 * @public
 * 
 */
sap.ui.layout.PaneContainer.prototype.getOrientation = function() { return new sap.ui.core.Orientation(); };

/**
 * Gets content of aggregation {@link #getPanes panes}.
 * 
 * The Pane that will be shown when there is no suitable pane for ResponsiveSplitter's current width.
 * 
 * @returns {sap.ui.core.Element[]}
 * 
 * @public
 * 
 */
sap.ui.layout.PaneContainer.prototype.getPanes = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation {@link #getPanes panes}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Element}
 *           oPane The pane whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.PaneContainer.prototype.indexOfPane = function(oPane) { return 0; };

/**
 * Pane insertion
 * 
 * @public
 * @param oObject
 * @param iIndex
 * @returns {sap.ui.base.ManagedObject}
 * 
 */
sap.ui.layout.PaneContainer.prototype.insertPane = function(oObject,iIndex) { return new sap.ui.base.ManagedObject(); };

/**
 * Removes all the controls from the aggregation {@link #getPanes panes}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Element[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.PaneContainer.prototype.removeAllPanes = function() { return new Array(); };

/**
 * Pane removal
 * 
 * @public
 * @param oObject
 * @returns {sap.ui.base.ManagedObject}
 * 
 */
sap.ui.layout.PaneContainer.prototype.removePane = function(oObject) { return new sap.ui.base.ManagedObject(); };

/**
 * Setter for property layoutData.
 * @public
 * @param {sap.ui.core.LayoutData} oLayoutData The LayoutData object.
 * @returns {sap.ui.layout.PaneContainer} this to allow method chaining.
 * 
 */
sap.ui.layout.PaneContainer.prototype.setLayoutData = function(oLayoutData) { return new sap.ui.layout.PaneContainer(); };

/**
 * Setter for property orientation.
 * Default value is sap.ui.core.Orientation.Horizontal
 * @public
 * @param {sap.ui.core.Orientation} sOrientation The Orientation type.
 * @returns {sap.ui.layout.PaneContainer} this to allow method chaining.
 * 
 */
sap.ui.layout.PaneContainer.prototype.setOrientation = function(sOrientation) { return new sap.ui.layout.PaneContainer(); };


// ---- sap.ui.layout.ResponsiveFlowLayout --------------------------------------------------------------------------

/**
 * Constructor for a new ResponsiveFlowLayout.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getResponsive responsive} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This is a layout where several controls can be added. These controls are blown up to fit in an entire row. If the window resizes, the controls are moved between the rows and resized again.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.ResponsiveFlowLayout = function(sId,mSettings) {};
/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.ResponsiveFlowLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48.7
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.layout.ResponsiveFlowLayout(); };

/**
 * Adds content.
 * This function needs to be overridden to prevent any rendering while some
 * content is still being added.
 * 
 * @param {sap.ui.core.Control}
 *            oContent The content that should be added to the layout
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.addContent = function(oContent) {  };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.layout.ResponsiveFlowLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.destroyContent = function() { return new sap.ui.layout.ResponsiveFlowLayout(); };

/**
 * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.48.7
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached, or otherwise, the default values are used.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getResponsive responsive}.
 * 
 * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>responsive</code>
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.getResponsive = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts content.
 * This function needs to be overridden to prevent any rendering while some
 * content is still being added.
 * 
 * @param {sap.ui.core.Control}
 *            oContent The content that should be inserted to the layout
 * @param {int}
 *            iIndex The index where the content should be inserted into
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.insertContent = function(oContent,iIndex) {  };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.48.7
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.48.7
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes content.
 * This function needs to be overridden to prevent any rendering while some
 * content is still being added.
 * 
 * @param {int|string|sap.ui.core.Control} oContent The content that should be removed from the layout
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.removeContent = function(oContent) {  };

/**
 * Sets a new value for property {@link #getResponsive responsive}.
 * 
 * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bResponsive New value for property <code>responsive</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.setResponsive = function(bResponsive) { return new sap.ui.layout.ResponsiveFlowLayout(); };


// ---- sap.ui.layout.ResponsiveFlowLayoutData --------------------------------------------------------------------------

/**
 * Constructor for a new ResponsiveFlowLayoutData.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMinWidth minWidth} : int (default: 100)</li>
 * <li>{@link #getWeight weight} : int (default: 1)</li>
 * <li>{@link #getLinebreak linebreak} : boolean (default: false)</li>
 * <li>{@link #getMargin margin} : boolean (default: true)</li>
 * <li>{@link #getLinebreakable linebreakable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This is a LayoutData element that can be added to a control if this control is used within a ResponsiveFlowLayout.
 * @extends sap.ui.core.LayoutData
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayoutData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getLinebreak linebreak}.
 * 
 * If this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreak</code>
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getLinebreak = function() { return false; };

/**
 * Gets current value of property {@link #getLinebreakable linebreakable}.
 * 
 * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>linebreakable</code>
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getLinebreakable = function() { return false; };

/**
 * Gets current value of property {@link #getMargin margin}.
 * 
 * Prevents any margin of the element if set to false.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>margin</code>
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getMargin = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayoutData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinWidth minWidth}.
 * 
 * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to this value.
 * 
 * Default value is <code>100</code>.
 * @returns {int} Value of property <code>minWidth</code>
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getMinWidth = function() { return 0; };

/**
 * Gets current value of property {@link #getWeight weight}.
 * 
 * Defines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>weight</code>
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getWeight = function() { return 0; };

/**
 * Sets a new value for property {@link #getLinebreak linebreak}.
 * 
 * If this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreak New value for property <code>linebreak</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreak = function(bLinebreak) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * Sets a new value for property {@link #getLinebreakable linebreakable}.
 * 
 * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bLinebreakable New value for property <code>linebreakable</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreakable = function(bLinebreakable) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * Sets a new value for property {@link #getMargin margin}.
 * 
 * Prevents any margin of the element if set to false.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bMargin New value for property <code>margin</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setMargin = function(bMargin) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * Sets a new value for property {@link #getMinWidth minWidth}.
 * 
 * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to this value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100</code>.
 * @param {int} iMinWidth New value for property <code>minWidth</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setMinWidth = function(iMinWidth) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * Sets a new value for property {@link #getWeight weight}.
 * 
 * Defines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iWeight New value for property <code>weight</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setWeight = function(iWeight) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };


// ---- sap.ui.layout.ResponsiveSplitter --------------------------------------------------------------------------

/**
 * Constructor for a new ResponsiveSplitter.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRootPaneContainer rootPaneContainer} : sap.ui.layout.PaneContainer (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getDefaultPane defaultPane} : (sap.ui.core.ID | sap.ui.layout.SplitPane)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A responsive splitter which divides the application into several areas.
 * <h3>Overview</h3>
 * The responsive splitter layout structures complex applications into defined areas.
 * These areas may be resizable and are either distributed across one or multiple screen areas, some of which may also be off-canvas.
 * 
 * The control is intended for developing administrative tools and applications.
 * <h3>Structure</h3>
 * The responsive splitter holds the following hierarchy of containers and controls:
 * <ul>
 * <li>{@link sap.ui.layout.PaneContainer Pane Container} - holds one or more Split Panes and determines the pane orientation. The pane which is stored in <code>rootPaneContainer</code> holds all other pane containers and split panes.</li>
 * <li>{@link sap.ui.layout.SplitPane Split Pane} - independent containers that may interact with one another. Each pane can hold only one control.</li>
 * </ul>
 * <h3>Usage</h3>
 * <h4>When to use</h4>
 * <ul>
 * <li>The application has to display several areas side by side that must be resizable.</li>
 * <li>The application must work on a range of different devices in a responsive manner.</li>
 * </ul>
 * <h3>Responsive Behavior</h3>
 * <ul>
 * <li>As soon as views are in the off-canvas mode, the pagination bar at the bottom of the application allows the user to switch between them.</li>
 * <li>On touch-enabled devices, the splitters show explicit handles with larger touch areas.</li>
 * <li>Double-clicking on a splitter will collapse or expand it back to its original position.</li>
 * </ul>
 * 
 * <b>Note:</b> We don't recommend dynamically inserting/removing panes into/from the PaneContainer since this might lead to inconsistent layout. If it is necessary, you need to ensure the sum of all sizes of the SplitPanes doesn't exceed the width of the PaneContainer.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.38
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/responsive-splitter/ Responsive Splitter}
 * 
 */
sap.ui.layout.ResponsiveSplitter = function(sId,mSettings) {};
/**
 * Destroys the rootPaneContainer in the aggregation {@link #getRootPaneContainer rootPaneContainer}.
 * @returns {sap.ui.layout.ResponsiveSplitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveSplitter.prototype.destroyRootPaneContainer = function() { return new sap.ui.layout.ResponsiveSplitter(); };

/**
 * Creates a new subclass of class sap.ui.layout.ResponsiveSplitter with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveSplitter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * ID of the element which is the current target of the association {@link #getDefaultPane defaultPane}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveSplitter.prototype.getDefaultPane = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the control
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveSplitter.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.layout.ResponsiveSplitter.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveSplitter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getRootPaneContainer rootPaneContainer}.
 * 
 * The root PaneContainer of the ResponsiveSplitter
 * 
 * @returns {sap.ui.layout.PaneContainer}
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveSplitter.prototype.getRootPaneContainer = function() { return new sap.ui.layout.PaneContainer(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the control
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveSplitter.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets the associated {@link #getDefaultPane defaultPane}.
 * @param {sap.ui.core.ID | sap.ui.layout.SplitPane} oDefaultPane ID of an element which becomes the new target of this defaultPane association; alternatively, an element instance may be given
 * @returns {sap.ui.layout.ResponsiveSplitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveSplitter.prototype.setDefaultPane = function(oDefaultPane) { return new sap.ui.layout.ResponsiveSplitter(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.ui.layout.ResponsiveSplitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveSplitter.prototype.setHeight = function(sHeight) { return new sap.ui.layout.ResponsiveSplitter(); };

/**
 * Sets the aggregated {@link #getRootPaneContainer rootPaneContainer}.
 * @param {sap.ui.layout.PaneContainer} oRootPaneContainer The rootPaneContainer to set
 * @returns {sap.ui.layout.ResponsiveSplitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveSplitter.prototype.setRootPaneContainer = function(oRootPaneContainer) { return new sap.ui.layout.ResponsiveSplitter(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.layout.ResponsiveSplitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.ResponsiveSplitter.prototype.setWidth = function(sWidth) { return new sap.ui.layout.ResponsiveSplitter(); };


// ---- sap.ui.layout.SideContentFallDown --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.SideContentFallDown.toString = function() { return ""; };

// ---- sap.ui.layout.SideContentPosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.SideContentPosition.toString = function() { return ""; };

// ---- sap.ui.layout.SideContentVisibility --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.SideContentVisibility.toString = function() { return ""; };

// ---- sap.ui.layout.SplitPane --------------------------------------------------------------------------

/**
 * Constructor for a new SplitPane.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDemandPane demandPane} : boolean (default: true)</li>
 * <li>{@link #getRequiredParentWidth requiredParentWidth} : int (default: 800)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * SplitPane is a container of a single control in a responsive splitter.
 * Could be used as an aggregation of a {@link sap.ui.layout.PaneContainer PaneContainer}.
 * 
 * The behavior of the Split Panes is handled by the following properties:
 * <ul>
 * <li><code>requiredParentWidth</code> - determines the minimum width of the parent container (in pixels). When it is reached, the pane will be hidden from the screen.</li>
 * <li><code>demandPane</code> - determines if the pane is reachable via the pagination bar after it has been hidden from the screen.</li>
 * </ul
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.38
 * 
 */
sap.ui.layout.SplitPane = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.layout.SplitPane} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.SplitPane.prototype.destroyContent = function() { return new sap.ui.layout.SplitPane(); };

/**
 * Creates a new subclass of class sap.ui.layout.SplitPane with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.SplitPane.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Content of the SplitPane
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.ui.layout.SplitPane.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getDemandPane demandPane}.
 * 
 * Determines whether the pane will be moved to the pagination
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>demandPane</code>
 * 
 * @public
 * 
 */
sap.ui.layout.SplitPane.prototype.getDemandPane = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.SplitPane.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.SplitPane.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getRequiredParentWidth requiredParentWidth}.
 * 
 * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.
 * 
 * Default value is <code>800</code>.
 * @returns {int} Value of property <code>requiredParentWidth</code>
 * 
 * @public
 * 
 */
sap.ui.layout.SplitPane.prototype.getRequiredParentWidth = function() { return 0; };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.ui.layout.SplitPane} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.SplitPane.prototype.setContent = function(oContent) { return new sap.ui.layout.SplitPane(); };

/**
 * Sets a new value for property {@link #getDemandPane demandPane}.
 * 
 * Determines whether the pane will be moved to the pagination
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDemandPane New value for property <code>demandPane</code>
 * @returns {sap.ui.layout.SplitPane} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.SplitPane.prototype.setDemandPane = function(bDemandPane) { return new sap.ui.layout.SplitPane(); };

/**
 * Sets a new value for property {@link #getRequiredParentWidth requiredParentWidth}.
 * 
 * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>800</code>.
 * @param {int} iRequiredParentWidth New value for property <code>requiredParentWidth</code>
 * @returns {sap.ui.layout.SplitPane} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.SplitPane.prototype.setRequiredParentWidth = function(iRequiredParentWidth) { return new sap.ui.layout.SplitPane(); };


// ---- sap.ui.layout.Splitter --------------------------------------------------------------------------

/**
 * Constructor for a new Splitter.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getOrientation orientation} : sap.ui.core.Orientation (default: Horizontal)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContentAreas contentAreas} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:resize resize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * 
 * A layout that contains several content areas. The content that is added to the splitter should contain LayoutData of the type SplitterLayoutData that defines its size and size contraints.
 * 
 * By adding or changing SplitterLayoutData to the controls that make up the content areas, the size can be changed programatically. Additionally the contents can be made non-resizable individually and a minimal size (in px) can be set.
 * 
 * The orientation of the splitter can be set to horizontal (default) or vertical. All content areas of the splitter will be arranged in that way. In order to split vertically and horizontally at the same time, Splitters need to be nested.
 * 
 * The splitter bars can be focused to enable resizing of the content areas via keyboard. The contents size can be manipulated when the splitter bar is focused and Shift-Left/Down/Right/Up are pressed. When Shift-Home/End are pressed, the contents are set their minimum or maximum size (keep in mind though, that resizing an auto-size content-area next to another auto-size one might lead to the effect that the former does not take its maximum size but only the maximum size before recalculating auto sizes).
 * 
 * The splitter bars used for resizing the contents by the user can be set to different widths (or heights in vertical mode) and the splitter will automatically resize the other contents accordingly. In case the splitter bar is resized after the splitter has rendered, a manual resize has to be triggered by invoking triggerResize() on the Splitter.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.22.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.Splitter = function(sId,mSettings) {};
/**
 * Event is fired when contents are resized.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event.
 * @param {int[]} oControlEvent.getParameters.oldSizes An array of values representing the old (pixel-)sizes of the splitter contents
 * @param {int[]} oControlEvent.getParameters.newSizes An array of values representing the new (pixel-)sizes of the splitter contents
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.resize = function(oControlEvent) {  };

/**
 * Adds some contentArea to the aggregation {@link #getContentAreas contentAreas}.
 * @param {sap.ui.core.Control}
 *            oContentArea The contentArea to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.addContentArea = function(oContentArea) { return new sap.ui.layout.Splitter(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:resize resize} event of this <code>sap.ui.layout.Splitter</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.layout.Splitter</code> itself.
 * 
 * Event is fired when contents are resized.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.layout.Splitter</code> itself
 * 
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.attachResize = function(oData,fnFunction,oListener) { return new sap.ui.layout.Splitter(); };

/**
 * Destroys all the contentAreas in the aggregation {@link #getContentAreas contentAreas}.
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.destroyContentAreas = function() { return new sap.ui.layout.Splitter(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:resize resize} event of this <code>sap.ui.layout.Splitter</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.detachResize = function(fnFunction,oListener) { return new sap.ui.layout.Splitter(); };

/**
 * Disables the resize handler for this control, this leads to an automatic resize of
 * the contents whenever the control changes its size. The resize handler is enabled
 * in every control instance by default.
 * For performance reasons this behavior can be disabled by calling disableAutoResize()
 * 
 * @param {boolean} [bTemporarily=false] Only disable autoResize temporarily (used for live resize), so that the previous status can be restored afterwards
 * @protected
 * @deprecated As of version 1.21. This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.disableAutoResize = function(bTemporarily) {  };

/**
 * Disables the resizing of the Splitter contents via keyboard. This changes the Splitter bars
 * to non-focussable elements.
 * 
 * @protected
 * 
 */
sap.ui.layout.Splitter.prototype.disableKeyboardSupport = function() {  };

/**
 * Disables recalculation and resize of the splitter contents while dragging the splitter bar.
 * This means that the contents are resized only once after moving the splitter bar.
 * 
 * @protected
 * @deprecated As of version 1.21. This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.disableLiveResize = function() {  };

/**
 * Enables the resize handler for this control, this leads to an automatic resize of
 * the contents whenever the control changes its size. The resize handler is enabled
 * in every control instance by default.
 * For performance reasons this behavior can be disabled by calling disableAutoResize()
 * 
 * @param {boolean} [bTemporarily=false] Only enables autoResize if it was previously disabled temporarily (used for live resize)
 * @protected
 * @deprecated As of version 1.21. This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.enableAutoResize = function(bTemporarily) {  };

/**
 * Enables the resizing of the Splitter contents via keyboard. This makes the Splitter bars
 * focussable elements.
 * 
 * @protected
 * 
 */
sap.ui.layout.Splitter.prototype.enableKeyboardSupport = function() {  };

/**
 * Enables recalculation and resize of the splitter contents while dragging the splitter bar.
 * This means that the contents are resized several times per second when moving the splitter bar.
 * 
 * @protected
 * @deprecated As of version 1.21. This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.enableLiveResize = function() {  };

/**
 * Creates a new subclass of class sap.ui.layout.Splitter with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.Splitter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:resize resize} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event.
 * @param {int[]} [mParameters.oldSizes] An array of values representing the old (pixel-)sizes of the splitter contents
 * @param {int[]} [mParameters.newSizes] An array of values representing the new (pixel-)sizes of the splitter contents
 * 
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.layout.Splitter.prototype.fireResize = function(mParameters) { return new sap.ui.layout.Splitter(); };

/**
 * Returns the current actual content sizes as pixel value - these values can change with every
 * resize.
 * 
 * @returns {Number[]} Array of px values that correspond to the content area sizes
 * @protected
 * @deprecated As of version 1.21. This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.getCalculatedSizes = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getContentAreas contentAreas}.
 * 
 * The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.getContentAreas = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the control
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.layout.Splitter.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.Splitter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getOrientation orientation}.
 * 
 * Whether to split the contents horizontally (default) or vertically.
 * 
 * Default value is <code>Horizontal</code>.
 * @returns {sap.ui.core.Orientation} Value of property <code>orientation</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.getOrientation = function() { return new sap.ui.core.Orientation(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the control
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContentAreas contentAreas}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContentArea The contentArea whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.indexOfContentArea = function(oContentArea) { return 0; };

/**
 * Inserts a contentArea into the aggregation {@link #getContentAreas contentAreas}.
 * 
 * @param {sap.ui.core.Control}
 *            oContentArea The contentArea to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the contentArea should be inserted at; for
 *              a negative value of <code>iIndex</code>, the contentArea is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the contentArea is inserted at
 *              the last position
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.insertContentArea = function(oContentArea,iIndex) { return new sap.ui.layout.Splitter(); };

/**
 * Removes all the controls from the aggregation {@link #getContentAreas contentAreas}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.removeAllContentAreas = function() { return new Array(); };

/**
 * Removes a contentArea from the aggregation {@link #getContentAreas contentAreas}.
 * 
 * @param {int | string | sap.ui.core.Control} vContentArea The contentArea to remove or its index or id
 * @returns {sap.ui.core.Control} The removed contentArea or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.removeContentArea = function(vContentArea) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.setHeight = function(sHeight) { return new sap.ui.layout.Splitter(); };

/**
 * Sets a new value for property {@link #getOrientation orientation}.
 * 
 * Whether to split the contents horizontally (default) or vertically.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Horizontal</code>.
 * @param {sap.ui.core.Orientation} sOrientation New value for property <code>orientation</code>
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.setOrientation = function(sOrientation) { return new sap.ui.layout.Splitter(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.setWidth = function(sWidth) { return new sap.ui.layout.Splitter(); };

/**
 * This method  triggers a resize on the Splitter - meaning it forces the Splitter to recalculate
 * all sizes.
 * This method should only be used in rare cases, for example when the CSS that defines the sizes
 * of the splitter bars changes without triggering a rerendering of the splitter.
 * 
 * @param {boolean} [forceDirectly=false] Do not delay the resize, trigger it right now.
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.triggerResize = function(forceDirectly) {  };


// ---- sap.ui.layout.SplitterLayoutData --------------------------------------------------------------------------

/**
 * Constructor for a new SplitterLayoutData.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getResizable resizable} : boolean (default: true)</li>
 * <li>{@link #getSize size} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getMinSize minSize} : int (default: 0)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Holds layout data for the splitter contents.
 * Allowed size values are numeric values ending in "px" and "%" and the
 * special case "auto".
 * (The CSS value "auto" is used internally to recalculate the size of the content
 * dynamically and is not directly set as style property.)
 * @extends sap.ui.core.LayoutData
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.22.0
 * @experimental Since version 1.22.0.
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.SplitterLayoutData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.SplitterLayoutData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.SplitterLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.layout.SplitterLayoutData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.SplitterLayoutData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinSize minSize}.
 * 
 * Sets the minimum size of the splitter content in px.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>minSize</code>
 * 
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.getMinSize = function() { return 0; };

/**
 * Gets current value of property {@link #getResizable resizable}.
 * 
 * Determines whether the control in the splitter can be resized or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>resizable</code>
 * 
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.getResizable = function() { return false; };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * Sets the size of the splitter content.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.getSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getMinSize minSize}.
 * 
 * Sets the minimum size of the splitter content in px.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMinSize New value for property <code>minSize</code>
 * @returns {sap.ui.layout.SplitterLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.setMinSize = function(iMinSize) { return new sap.ui.layout.SplitterLayoutData(); };

/**
 * Sets a new value for property {@link #getResizable resizable}.
 * 
 * Determines whether the control in the splitter can be resized or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bResizable New value for property <code>resizable</code>
 * @returns {sap.ui.layout.SplitterLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.setResizable = function(bResizable) { return new sap.ui.layout.SplitterLayoutData(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * Sets the size of the splitter content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sSize New value for property <code>size</code>
 * @returns {sap.ui.layout.SplitterLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.setSize = function(sSize) { return new sap.ui.layout.SplitterLayoutData(); };


// ---- sap.ui.layout.VerticalLayout --------------------------------------------------------------------------

/**
 * Constructor for a new VerticalLayout.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * In this layout the content controls are rendered one below the other.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.VerticalLayout = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.VerticalLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.addContent = function(oContent) { return new sap.ui.layout.VerticalLayout(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.layout.VerticalLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.destroyContent = function() { return new sap.ui.layout.VerticalLayout(); };

/**
 * Creates a new subclass of class sap.ui.layout.VerticalLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.VerticalLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * @see sap.ui.core.Control#getAccessibilityInfo
 * @protected
 * @returns {object} An object with the accessibilty infos for this control
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getAccessibilityInfo = function() { return new Object(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Content controls within the layout.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getEnabled enabled}.
 * 
 * If not enabled, all controls inside are not enabled automatically.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.VerticalLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.VerticalLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the <code>VerticalLayout</code>. If no width is set, the width of the content is used.
 * If the content of the layout has a larger width than the layout, it is cut off.
 * There is no scrolling inside the layout.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Control}
 *            oContent The content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.VerticalLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.VerticalLayout(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getEnabled enabled}.
 * 
 * If not enabled, all controls inside are not enabled automatically.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.ui.layout.VerticalLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.setEnabled = function(bEnabled) { return new sap.ui.layout.VerticalLayout(); };

/**
 * Sets the width of the Vertical Layout without rerendering of the whole control, and everything inside it.
 * @param {sap.ui.core.CSSSize} width The new width
 * @returns {sap.ui.layout.VerticalLayout} This pointer for chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.setWidth = function(width) { return new sap.ui.layout.VerticalLayout(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.layout.BackgroundDesign --------------------------------------------------------------------------

/**
 * A solid background color dependent on the theme.
 * @public
 * 
 */
sap.ui.layout.BackgroundDesign.Solid = "";

/**
 * A translucent background depending on the opacity value of the theme.
 * @public
 * 
 */
sap.ui.layout.BackgroundDesign.Translucent = "";

/**
 * Transparent background.
 * @public
 * 
 */
sap.ui.layout.BackgroundDesign.Transparent = "";


// ---- sap.ui.layout.BlockBackgroundType --------------------------------------------------------------------------

/**
 * Background with pre-defined accent colors
 * @public
 * 
 */
sap.ui.layout.BlockBackgroundType.Accent = "";

/**
 * For applications that want to make use of e.g. charts in the Blocks, this layout type has spacings around the Blocks
 * @public
 * 
 */
sap.ui.layout.BlockBackgroundType.Dashboard = "";

/**
 * Background is transparent
 * @public
 * 
 */
sap.ui.layout.BlockBackgroundType.Default = "";

/**
 * Background is with predefined light colors
 * @public
 * 
 */
sap.ui.layout.BlockBackgroundType.Light = "";

/**
 * Background with bright and dark background colors
 * @deprecated since 1.50
 * @public
 * 
 */
sap.ui.layout.BlockBackgroundType.Mixed = "";


// ---- sap.ui.layout.BlockLayoutCellColorSet --------------------------------------------------------------------------

/**
 * Color Set 1
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet1 = "";

/**
 * Color Set 10
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet10 = "";

/**
 * Color Set 11
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet11 = "";

/**
 * Color Set 2
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet2 = "";

/**
 * Color Set 3
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet3 = "";

/**
 * Color Set 4
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet4 = "";

/**
 * Color Set 5
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet5 = "";

/**
 * Color Set 6
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet6 = "";

/**
 * Color Set 7
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet7 = "";

/**
 * Color Set 8
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet8 = "";

/**
 * Color Set 9
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorSet.ColorSet9 = "";


// ---- sap.ui.layout.BlockLayoutCellColorShade --------------------------------------------------------------------------

/**
 * Shade A
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorShade.ShadeA = "";

/**
 * Shade B
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorShade.ShadeB = "";

/**
 * Shade C
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorShade.ShadeC = "";

/**
 * Shade D
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorShade.ShadeD = "";

/**
 * Shade E - available only for Fiori 3 theme
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorShade.ShadeE = "";

/**
 * Shade F - available only for Fiori 3 theme
 * 
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCellColorShade.ShadeF = "";


// ---- sap.ui.layout.BlockRowColorSets --------------------------------------------------------------------------

/**
 * sap.ui.layout.BlockBackgroundType.Default: N/A
 * sap.ui.layout.BlockBackgroundType.Light: Color Set 1
 * sap.ui.layout.BlockBackgroundType.Mixed: Color Set 1
 * sap.ui.layout.BlockBackgroundType.Accent: Color Set 1
 * sap.ui.layout.BlockBackgroundType.Dashboard: N/A
 * @public
 * 
 */
sap.ui.layout.BlockRowColorSets.ColorSet1 = "";

/**
 * sap.ui.layout.BlockBackgroundType.Default: N/A
 * sap.ui.layout.BlockBackgroundType.Light: Color Set 2
 * sap.ui.layout.BlockBackgroundType.Mixed: Color Set 2
 * sap.ui.layout.BlockBackgroundType.Accent: Color Set 2
 * sap.ui.layout.BlockBackgroundType.Dashboard: N/A
 * @public
 * 
 */
sap.ui.layout.BlockRowColorSets.ColorSet2 = "";

/**
 * sap.ui.layout.BlockBackgroundType.Default: N/A
 * sap.ui.layout.BlockBackgroundType.Light: Color Set 1
 * sap.ui.layout.BlockBackgroundType.Mixed: Color Set 1
 * sap.ui.layout.BlockBackgroundType.Accent: Color Set 3
 * sap.ui.layout.BlockBackgroundType.Dashboard: N/A
 * @public
 * 
 */
sap.ui.layout.BlockRowColorSets.ColorSet3 = "";

/**
 * sap.ui.layout.BlockBackgroundType.Default: N/A
 * sap.ui.layout.BlockBackgroundType.Light: Color Set 2
 * sap.ui.layout.BlockBackgroundType.Mixed: Color Set 2
 * sap.ui.layout.BlockBackgroundType.Accent: Color Set 4
 * sap.ui.layout.BlockBackgroundType.Dashboard: N/A
 * @public
 * 
 */
sap.ui.layout.BlockRowColorSets.ColorSet4 = "";


// ---- sap.ui.layout.cssgrid.CSSGridAutoFlow --------------------------------------------------------------------------

/**
 * Insert auto-placed items by filling each column.
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGridAutoFlow.Column = "";

/**
 * Insert auto-placed items by filling each column, and fill any holes in the grid.
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGridAutoFlow.ColumnDense = "";

/**
 * Insert auto-placed items by filling each row.
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGridAutoFlow.Row = "";

/**
 * Insert auto-placed items by filling each row, and fill any holes in the grid.
 * @public
 * 
 */
sap.ui.layout.cssgrid.CSSGridAutoFlow.RowDense = "";


// ---- sap.ui.layout.form.SimpleFormLayout --------------------------------------------------------------------------

/**
 * Uses the <code>ColumnLayout</code> layout to render the <code>SimpleForm</code> control
 * @public
 * @since 1.56.0
 * 
 */
sap.ui.layout.form.SimpleFormLayout.ColumnLayout = "";

/**
 * Uses the <code>GridLayout</code> layout to render the <code>SimpleForm</code> control
 * @public
 * 
 */
sap.ui.layout.form.SimpleFormLayout.GridLayout = "";

/**
 * Uses the <code>ResponsiveGridLayout</code> layout to render the <code>SimpleForm</code> control
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout = "";

/**
 * Uses the <code>ResponsiveLayout</code> layout to render the <code>SimpleForm</code> control
 * @public
 * 
 */
sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout = "";


// ---- sap.ui.layout.GridPosition --------------------------------------------------------------------------

/**
 * <code>Grid</code> is centered on the screen.
 * @public
 * 
 */
sap.ui.layout.GridPosition.Center = "";

/**
 * <code>Grid</code> is aligned left.
 * @public
 * 
 */
sap.ui.layout.GridPosition.Left = "";

/**
 * <code>Grid</code> is aligned to the right.
 * @public
 * 
 */
sap.ui.layout.GridPosition.Right = "";


// ---- sap.ui.layout.SideContentFallDown --------------------------------------------------------------------------

/**
 * Side content falls down on breakpoints below L
 * @public
 * 
 */
sap.ui.layout.SideContentFallDown.BelowL = "";

/**
 * Side content falls down on breakpoints below M
 * @public
 * 
 */
sap.ui.layout.SideContentFallDown.BelowM = "";

/**
 * Side content falls down on breakpoints below XL
 * @public
 * 
 */
sap.ui.layout.SideContentFallDown.BelowXL = "";

/**
 * Side content falls down on breakpoint M and the minimum width for the side content
 * @public
 * 
 */
sap.ui.layout.SideContentFallDown.OnMinimumWidth = "";


// ---- sap.ui.layout.SideContentPosition --------------------------------------------------------------------------

/**
 * The side content is on the left side of the main container in left-to-right mode and on the right side in right-to-left mode.
 * @public
 * 
 */
sap.ui.layout.SideContentPosition.Begin = "";

/**
 * The side content is on the right side of the main container in left-to-right mode and on the left side in right-to-left mode.
 * @public
 * 
 */
sap.ui.layout.SideContentPosition.End = "";


// ---- sap.ui.layout.SideContentVisibility --------------------------------------------------------------------------

/**
 * Show the side content on any breakpoint
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.AlwaysShow = "";

/**
 * Don't show the side content on any breakpoints
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.NeverShow = "";

/**
 * Show the side content on XL breakpoint
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.ShowAboveL = "";

/**
 * Show the side content on L and XL breakpoints
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.ShowAboveM = "";

/**
 * Show the side content on M, L and XL breakpoints
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.ShowAboveS = "";

