
// ---- sap.uxap --------------------------------------------------------------------------


// ---- sap.uxap.AnchorBar --------------------------------------------------------------------------

/**
 * Constructor for a new <code>AnchorBar</code>.
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
 * <li>{@link #getShowPopover showPopover} : boolean (default: true)</li>
 * <li>{@link #getUpperCase upperCase} : boolean (default: false)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.BackgroundDesign</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedButton selectedButton} : (sap.ui.core.ID | sap.m.Button)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Toolbar#constructor sap.m.Toolbar}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Displays the titles of the sections and subsections in the {@link sap.uxap.ObjectPageLayout ObjectPageLayout}
 * and allows the user to scroll to the respective content.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>AnchorBar</code> is internally generated as a menu in the <code>ObjectPageLayout</code>.
 * It displays the sections and subsections and allows the user to directly scroll to the respective
 * content by selecting them, while it remains visible at the top of the page (below the page header).
 * 
 * @extends sap.m.Toolbar
 * 
 * @constructor
 * @public
 * @since 1.26
 * @see {@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.AnchorBar = function(sId,mSettings) {};
/**
 * This method is a hook for the RenderManager that gets called
 * during the rendering of child Controls. It allows to add,
 * remove and update existing accessibility attributes (ARIA) of
 * those controls.
 * 
 * @param {sap.ui.core.Control} oElement - The Control that gets rendered by the RenderManager
 * @param {Object} mAriaProps - The mapping of "aria-" prefixed attributes
 * @protected
 * 
 */
sap.uxap.AnchorBar.prototype.enhanceAccessibilityState = function(oElement,mAriaProps) {  };

/**
 * Creates a new subclass of class sap.uxap.AnchorBar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Toolbar.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.AnchorBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Determines the background color of the <code>AnchorBar</code>.
 * 
 * <b>Note:</b> The default value of <code>backgroundDesign</code> property is null.
 * If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>,
 * which depends on the specific theme.
 * 
 * @returns {sap.m.BackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.58
 * 
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.getBackgroundDesign = function() { return new sap.m.BackgroundDesign(); };

/**
 * Returns a metadata object for class sap.uxap.AnchorBar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.AnchorBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling.
 * 
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @returns {sap.ui.core.delegate.ScrollEnablement} The <code>sap.ui.core.delegate.ScrollEnablement</code> instance
 * 
 */
sap.uxap.AnchorBar.prototype.getScrollDelegate = function() { return new Object(); };

/**
 * ID of the element which is the current target of the association {@link #getSelectedButton selectedButton}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.getSelectedButton = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getShowPopover showPopover}.
 * 
 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showPopover</code>
 * 
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.getShowPopover = function() { return false; };

/**
 * Gets current value of property {@link #getUpperCase upperCase}.
 * 
 * Determines whether the Anchor bar items are displayed in upper case.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>upperCase</code>
 * 
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.getUpperCase = function() { return false; };

/**
 * Scroll to a specific Section.
 * 
 * @param {string} sId The Section ID to scroll to
 * @param {int} iDuration Scroll duration (in ms). Default value is 0.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.AnchorBar.prototype.scrollToSection = function(sId,iDuration) {  };

/**
 * Sets the value of the <code>backgroundDesign</code> property.
 * 
 * @param {sap.m.BackgroundDesign} sBackgroundDesign - new value of the <code>backgroundDesign</code>
 * @return {sap.uxap.AnchorBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.58
 * 
 */
sap.uxap.AnchorBar.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.uxap.AnchorBar(); };

/**
 * Sets the associated {@link #getSelectedButton selectedButton}.
 * @param {sap.ui.core.ID | sap.m.Button} oSelectedButton ID of an element which becomes the new target of this selectedButton association; alternatively, an element instance may be given
 * @returns {sap.uxap.AnchorBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.setSelectedButton = function(oSelectedButton) { return new sap.uxap.AnchorBar(); };

/**
 * Sets a new value for property {@link #getShowPopover showPopover}.
 * 
 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowPopover New value for property <code>showPopover</code>
 * @returns {sap.uxap.AnchorBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.setShowPopover = function(bShowPopover) { return new sap.uxap.AnchorBar(); };

/**
 * Sets a new value for property {@link #getUpperCase upperCase}.
 * 
 * Determines whether the Anchor bar items are displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUpperCase New value for property <code>upperCase</code>
 * @returns {sap.uxap.AnchorBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.AnchorBar.prototype.setUpperCase = function(bUpperCase) { return new sap.uxap.AnchorBar(); };


// ---- sap.uxap.BlockBase --------------------------------------------------------------------------

/**
 * Constructor for a new <code>BlockBase</code>.
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
 * <li>{@link #getMode mode} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getColumnLayout columnLayout} : sap.uxap.BlockBaseColumnLayout (default: auto)</li>
 * <li>{@link #getFormAdjustment formAdjustment} : sap.uxap.BlockBaseFormAdjustment (default: BlockColumns)</li>
 * <li>{@link #getShowSubSectionMore showSubSectionMore} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMappings mappings} : sap.uxap.ModelMapping[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedView selectedView} : (sap.ui.core.ID | sap.ui.core.Control)</li>
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
 * The main element that holds the content that is displayed in an
 * {@link sap.uxap.ObjectPageLayout ObjectPageLayout}, but not necessarily only there.
 * 
 * <h3>Overview</h3>
 * 
 * The blocks give the flexibility to combine different content types.
 * 
 * A block is a control that:
 * <ul>
 * <li>Has modes and a view associated to each mode. At rendering time, the view associated to the mode is rendered.</li>
 * <li>Can use all view types for storing its internal control tree (XML, JS, JSON, HTML)</li>
 * </ul>
 * 
 * As any UI5 view, the XML view can have a controller which automatically comes with a
 * <code>this.oParentBlock</code> attribute (so that the controller can interact with the block).
 * The <code>oParentBlock</code> is firstly available in <code>onParentBlockModeChange</code> method.
 * If the controller implements the <code>onParentBlockModeChange</code> method, this method will
 * be called with the <code>sMode</code> parameter when the view is used or reused by the block.
 * 
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @since 1.26
 * @see {@link topic:4527729576cb4a4888275b6935aad03a Block Base}
 * @see {@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.BlockBase = function(sId,mSettings) {};
/**
 * Adds some mapping to the aggregation {@link #getMappings mappings}.
 * @param {sap.uxap.ModelMapping}
 *            oMapping The mapping to add; if empty, nothing is inserted
 * @returns {sap.uxap.BlockBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.addMapping = function(oMapping) { return new sap.uxap.BlockBase(); };

/**
 * Destroys all the mappings in the aggregation {@link #getMappings mappings}.
 * @returns {sap.uxap.BlockBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.destroyMappings = function() { return new sap.uxap.BlockBase(); };

/**
 * Creates a new subclass of class sap.uxap.BlockBase with name <code>sClassName</code>
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
sap.uxap.BlockBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColumnLayout columnLayout}.
 * 
 * Determines on how many columns the layout will be rendered.
 * Allowed values are integers from 1 to 4 and "auto".
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.uxap.BlockBaseColumnLayout} Value of property <code>columnLayout</code>
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getColumnLayout = function() { return new sap.uxap.BlockBaseColumnLayout(); };

/**
 * Gets current value of property {@link #getFormAdjustment formAdjustment}.
 * 
 * Determines if the block should automatically adjust its inner forms.
 * Allowed values are "BlockColumns" and "OneColumn" and "None".
 * If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block.
 * If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block.
 * If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.
 * 
 * Default value is <code>BlockColumns</code>.
 * @returns {sap.uxap.BlockBaseFormAdjustment} Value of property <code>formAdjustment</code>
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getFormAdjustment = function() { return new sap.uxap.BlockBaseFormAdjustment(); };

/**
 * Gets content of aggregation {@link #getMappings mappings}.
 * 
 * Map external UI5 model and internal Block model
 * 
 * @returns {sap.uxap.ModelMapping[]}
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getMappings = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.uxap.BlockBase.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.BlockBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMode mode}.
 * 
 * Determines the mode of the block.
 * When block is used inside ObjectPage this mode is inherited my the SubSection.
 * The mode of the block is changed when SubSection mode changes.
 * 
 * @returns {string} Value of property <code>mode</code>
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getMode = function() { return ""; };

/**
 * ID of the element which is the current target of the association {@link #getSelectedView selectedView}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getSelectedView = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getShowSubSectionMore showSubSectionMore}.
 * 
 * Determines whether the show more button should be shown.
 * 
 * <b>Note:</b> The property will take effect if the <code>BlockBase</code> is inside <code>ObjectPageSubSection</code>
 * and would be ignored in case the <code>BlockBase</code> is nested inside another <code>BlockBase</code>.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showSubSectionMore</code>
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getShowSubSectionMore = function() { return false; };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Determines the visibility of the block.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.getVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.uxap.ModelMapping</code> in the aggregation {@link #getMappings mappings}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.uxap.ModelMapping}
 *           oMapping The mapping whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.indexOfMapping = function(oMapping) { return 0; };

/**
 * Inserts a mapping into the aggregation {@link #getMappings mappings}.
 * 
 * @param {sap.uxap.ModelMapping}
 *            oMapping The mapping to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the mapping should be inserted at; for
 *              a negative value of <code>iIndex</code>, the mapping is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the mapping is inserted at
 *              the last position
 * @returns {sap.uxap.BlockBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.insertMapping = function(oMapping,iIndex) { return new sap.uxap.BlockBase(); };

/**
 * Removes all the controls from the aggregation {@link #getMappings mappings}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.uxap.ModelMapping[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.removeAllMappings = function() { return new Array(); };

/**
 * Removes a mapping from the aggregation {@link #getMappings mappings}.
 * 
 * @param {int | string | sap.uxap.ModelMapping} vMapping The mapping to remove or its index or id
 * @returns {sap.uxap.ModelMapping} The removed mapping or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.removeMapping = function(vMapping) { return new sap.uxap.ModelMapping(); };

/**
 * Set the column layout for this particular block.
 * @param {string} sLayout The column layout to apply to the control
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.setColumnLayout = function(sLayout) {  };

/**
 * Sets a new value for property {@link #getFormAdjustment formAdjustment}.
 * 
 * Determines if the block should automatically adjust its inner forms.
 * Allowed values are "BlockColumns" and "OneColumn" and "None".
 * If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block.
 * If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block.
 * If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>BlockColumns</code>.
 * @param {sap.uxap.BlockBaseFormAdjustment} sFormAdjustment New value for property <code>formAdjustment</code>
 * @returns {sap.uxap.BlockBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.setFormAdjustment = function(sFormAdjustment) { return new sap.uxap.BlockBase(); };

/**
 * Set the view mode for this particular block.
 * @public
 * @param {string} sMode the mode to apply to the control (that should be synchronized with view declared)
 * @returns {*} this
 * 
 */
sap.uxap.BlockBase.prototype.setMode = function(sMode) { return null; };

/**
 * Sets the associated {@link #getSelectedView selectedView}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oSelectedView ID of an element which becomes the new target of this selectedView association; alternatively, an element instance may be given
 * @returns {sap.uxap.BlockBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.setSelectedView = function(oSelectedView) { return new sap.uxap.BlockBase(); };

/**
 * Sets a new value for property {@link #getShowSubSectionMore showSubSectionMore}.
 * 
 * Determines whether the show more button should be shown.
 * 
 * <b>Note:</b> The property will take effect if the <code>BlockBase</code> is inside <code>ObjectPageSubSection</code>
 * and would be ignored in case the <code>BlockBase</code> is nested inside another <code>BlockBase</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowSubSectionMore New value for property <code>showSubSectionMore</code>
 * @returns {sap.uxap.BlockBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.setShowSubSectionMore = function(bShowSubSectionMore) { return new sap.uxap.BlockBase(); };

/**
 * Setter for the visibility of the block.
 * @public
 * 
 */
sap.uxap.BlockBase.prototype.setVisible = function() {  };


// ---- sap.uxap.BlockBaseColumnLayout --------------------------------------------------------------------------


// ---- sap.uxap.BlockBaseFormAdjustment --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.BlockBaseFormAdjustment.toString = function() { return ""; };

// ---- sap.uxap.BreadCrumbs --------------------------------------------------------------------------

/**
 * Constructor for a new <code>BreadCrumbs</code>.
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
 * <li>{@link #getShowCurrentLocation showCurrentLocation} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLinks links} : sap.m.Link[] (default)</li>
 * <li>{@link #getCurrentLocation currentLocation} : sap.m.Text</li>
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
 * Represents the navigation steps up to the current location in the app.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>BreadCrumbs</code> control allows the users to quickly navigate to a previous
 * location on the path that got them to the current location by choosing the displayed
 * navigation steps.
 * 
 * It has two main modes of operation:
 * <ul>
 * <li>A trail of links followed by separators, when there's enough space for the control to fit on one line.</li>
 * <li>A dropdown list with the links, when the trail of links wouldn't fit on one line.</li>
 * </ul>
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @since 1.30
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.BreadCrumbs = function(sId,mSettings) {};
/**
 * Adds some link to the aggregation {@link #getLinks links}.
 * @param {sap.m.Link}
 *            oLink The link to add; if empty, nothing is inserted
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.addLink = function(oLink) { return new sap.uxap.BreadCrumbs(); };

/**
 * Destroys the currentLocation in the aggregation {@link #getCurrentLocation currentLocation}.
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.destroyCurrentLocation = function() { return new sap.uxap.BreadCrumbs(); };

/**
 * Destroys all the links in the aggregation {@link #getLinks links}.
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.destroyLinks = function() { return new sap.uxap.BreadCrumbs(); };

/**
 * Creates a new subclass of class sap.uxap.BreadCrumbs with name <code>sClassName</code>
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
sap.uxap.BreadCrumbs.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getCurrentLocation currentLocation}.
 * 
 * The current/last element in the BreadCrumbs path.
 * 
 * @returns {sap.m.Text}
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.getCurrentLocation = function() { return new sap.m.Text(); };

/**
 * Gets content of aggregation {@link #getLinks links}.
 * 
 * A list of all the active link elements in the BreadCrumbs control.
 * 
 * @returns {sap.m.Link[]}
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.getLinks = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.uxap.BreadCrumbs.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.BreadCrumbs.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowCurrentLocation showCurrentLocation}.
 * 
 * Sets the visibility of the current/last element in the BreadCrumbs path.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showCurrentLocation</code>
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.getShowCurrentLocation = function() { return false; };

/**
 * Checks for the provided <code>sap.m.Link</code> in the aggregation {@link #getLinks links}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Link}
 *           oLink The link whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.indexOfLink = function(oLink) { return 0; };

/**
 * Inserts a link into the aggregation {@link #getLinks links}.
 * 
 * @param {sap.m.Link}
 *            oLink The link to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the link should be inserted at; for
 *              a negative value of <code>iIndex</code>, the link is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the link is inserted at
 *              the last position
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.insertLink = function(oLink,iIndex) { return new sap.uxap.BreadCrumbs(); };

/**
 * Removes all the controls from the aggregation {@link #getLinks links}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Link[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.removeAllLinks = function() { return new Array(); };

/**
 * Removes a link from the aggregation {@link #getLinks links}.
 * 
 * @param {int | string | sap.m.Link} vLink The link to remove or its index or id
 * @returns {sap.m.Link} The removed link or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.removeLink = function(vLink) { return new sap.m.Link(); };

/**
 * Sets the aggregated {@link #getCurrentLocation currentLocation}.
 * @param {sap.m.Text} oCurrentLocation The currentLocation to set
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.setCurrentLocation = function(oCurrentLocation) { return new sap.uxap.BreadCrumbs(); };

/**
 * Sets a new value for property {@link #getShowCurrentLocation showCurrentLocation}.
 * 
 * Sets the visibility of the current/last element in the BreadCrumbs path.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowCurrentLocation New value for property <code>showCurrentLocation</code>
 * @returns {sap.uxap.BreadCrumbs} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.BreadCrumbs.prototype.setShowCurrentLocation = function(bShowCurrentLocation) { return new sap.uxap.BreadCrumbs(); };


// ---- sap.uxap.HierarchicalSelect --------------------------------------------------------------------------

/**
 * Constructor for a new <code>HierarchicalSelect</code>.
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
 * <li>{@link #getUpperCase upperCase} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Select#constructor sap.m.Select}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A select that displays items on a hierarchy of 2 levels.
 * 
 * If a provided item has a custom data named <code>secondLevel</code>, then it will be displayed as a second level,
 * otherwise it would be displayed as a first level.
 * @extends sap.m.Select
 * 
 * @constructor
 * @public
 * @since 1.26
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.HierarchicalSelect = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.HierarchicalSelect with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Select.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.HierarchicalSelect.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.uxap.HierarchicalSelect.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.HierarchicalSelect.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getUpperCase upperCase}.
 * 
 * Determines whether the HierarchicalSelect items are displayed in upper case.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>upperCase</code>
 * 
 * @public
 * 
 */
sap.uxap.HierarchicalSelect.prototype.getUpperCase = function() { return false; };

/**
 * Sets a new value for property {@link #getUpperCase upperCase}.
 * 
 * Determines whether the HierarchicalSelect items are displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUpperCase New value for property <code>upperCase</code>
 * @returns {sap.uxap.HierarchicalSelect} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.HierarchicalSelect.prototype.setUpperCase = function(bUpperCase) { return new sap.uxap.HierarchicalSelect(); };


// ---- sap.uxap.IHeaderContent --------------------------------------------------------------------------


// ---- sap.uxap.IHeaderTitle --------------------------------------------------------------------------


// ---- sap.uxap.Importance --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.Importance.toString = function() { return ""; };

// ---- sap.uxap.ModelMapping --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ModelMapping</code>.
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
 * <li>{@link #getExternalModelName externalModelName} : string</li>
 * <li>{@link #getInternalModelName internalModelName} : string (default: Model)</li>
 * <li>{@link #getExternalPath externalPath} : string</li>
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
 * Defines the entity that will be passed to the {@link sap.uxap.ObjectPageLayout}.
 * 
 * @extends sap.ui.core.Element
 * 
 * @constructor
 * @public
 * @since 1.26
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ModelMapping = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.ModelMapping with name <code>sClassName</code>
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
sap.uxap.ModelMapping.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getExternalModelName externalModelName}.
 * 
 * Determines the external model name.
 * 
 * @returns {string} Value of property <code>externalModelName</code>
 * 
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.getExternalModelName = function() { return ""; };

/**
 * Gets current value of property {@link #getExternalPath externalPath}.
 * 
 * Determines the external path.
 * 
 * @returns {string} Value of property <code>externalPath</code>
 * 
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.getExternalPath = function() { return ""; };

/**
 * Gets current value of property {@link #getInternalModelName internalModelName}.
 * 
 * Determines the internal model name.
 * 
 * Default value is <code>Model</code>.
 * @returns {string} Value of property <code>internalModelName</code>
 * 
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.getInternalModelName = function() { return ""; };

/**
 * Returns a metadata object for class sap.uxap.ModelMapping.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ModelMapping.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getExternalModelName externalModelName}.
 * 
 * Determines the external model name.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sExternalModelName New value for property <code>externalModelName</code>
 * @returns {sap.uxap.ModelMapping} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.setExternalModelName = function(sExternalModelName) { return new sap.uxap.ModelMapping(); };

/**
 * Sets a new value for property {@link #getExternalPath externalPath}.
 * 
 * Determines the external path.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sExternalPath New value for property <code>externalPath</code>
 * @returns {sap.uxap.ModelMapping} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.setExternalPath = function(sExternalPath) { return new sap.uxap.ModelMapping(); };

/**
 * Sets a new value for property {@link #getInternalModelName internalModelName}.
 * 
 * Determines the internal model name.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Model</code>.
 * @param {string} sInternalModelName New value for property <code>internalModelName</code>
 * @returns {sap.uxap.ModelMapping} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ModelMapping.prototype.setInternalModelName = function(sInternalModelName) { return new sap.uxap.ModelMapping(); };


// ---- sap.uxap.ObjectPageAccessibleLandmarkInfo --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.uxap.ObjectPageAccessibleLandmarkInfo</code> element.
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
 * <li>{@link #getRootRole rootRole} : sap.ui.core.AccessibleLandmarkRole (default: Main)</li>
 * <li>{@link #getRootLabel rootLabel} : string</li>
 * <li>{@link #getContentRole contentRole} : sap.ui.core.AccessibleLandmarkRole (default: None)</li>
 * <li>{@link #getContentLabel contentLabel} : string</li>
 * <li>{@link #getNavigationRole navigationRole} : sap.ui.core.AccessibleLandmarkRole (default: Navigation)</li>
 * <li>{@link #getNavigationLabel navigationLabel} : string</li>
 * <li>{@link #getHeaderRole headerRole} : sap.ui.core.AccessibleLandmarkRole (default: Banner)</li>
 * <li>{@link #getHeaderLabel headerLabel} : string</li>
 * <li>{@link #getFooterRole footerRole} : sap.ui.core.AccessibleLandmarkRole (default: Region)</li>
 * <li>{@link #getFooterLabel footerLabel} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new element, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new element
 * 
 * @class
 * Settings for accessible landmarks which can be applied to the container elements of a <code>sap.uxap.ObjectPageLayout</code> control.
 * These landmarks are used by assistive technologies (such as screenreaders) to provide a meaningful page overview.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.61
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.ObjectPageAccessibleLandmarkInfo with name <code>sClassName</code>
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
sap.uxap.ObjectPageAccessibleLandmarkInfo.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getContentLabel contentLabel}.
 * 
 * Texts which describe the landmark of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * @returns {string} Value of property <code>contentLabel</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getContentLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getContentRole contentRole}.
 * 
 * Landmark role of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.core.AccessibleLandmarkRole} Value of property <code>contentRole</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getContentRole = function() { return new sap.ui.core.AccessibleLandmarkRole(); };

/**
 * Gets current value of property {@link #getFooterLabel footerLabel}.
 * 
 * Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * @returns {string} Value of property <code>footerLabel</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getFooterLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getFooterRole footerRole}.
 * 
 * Landmark role of the footer container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * Default value is <code>Region</code>.
 * @returns {sap.ui.core.AccessibleLandmarkRole} Value of property <code>footerRole</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getFooterRole = function() { return new sap.ui.core.AccessibleLandmarkRole(); };

/**
 * Gets current value of property {@link #getHeaderLabel headerLabel}.
 * 
 * Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * @returns {string} Value of property <code>headerLabel</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getHeaderLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getHeaderRole headerRole}.
 * 
 * Landmark role of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * Default value is <code>Banner</code>.
 * @returns {sap.ui.core.AccessibleLandmarkRole} Value of property <code>headerRole</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getHeaderRole = function() { return new sap.ui.core.AccessibleLandmarkRole(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageAccessibleLandmarkInfo.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNavigationLabel navigationLabel}.
 * 
 * Texts which describe the landmark of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * @returns {string} Value of property <code>navigationLabel</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getNavigationLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getNavigationRole navigationRole}.
 * 
 * Landmark role of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * Default value is <code>Navigation</code>.
 * @returns {sap.ui.core.AccessibleLandmarkRole} Value of property <code>navigationRole</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getNavigationRole = function() { return new sap.ui.core.AccessibleLandmarkRole(); };

/**
 * Gets current value of property {@link #getRootLabel rootLabel}.
 * 
 * Texts which describe the landmark of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * @returns {string} Value of property <code>rootLabel</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getRootLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getRootRole rootRole}.
 * 
 * Landmark role of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * Default value is <code>Main</code>.
 * @returns {sap.ui.core.AccessibleLandmarkRole} Value of property <code>rootRole</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.getRootRole = function() { return new sap.ui.core.AccessibleLandmarkRole(); };

/**
 * Sets a new value for property {@link #getContentLabel contentLabel}.
 * 
 * Texts which describe the landmark of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sContentLabel New value for property <code>contentLabel</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setContentLabel = function(sContentLabel) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getContentRole contentRole}.
 * 
 * Landmark role of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.core.AccessibleLandmarkRole} sContentRole New value for property <code>contentRole</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setContentRole = function(sContentRole) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getFooterLabel footerLabel}.
 * 
 * Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFooterLabel New value for property <code>footerLabel</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setFooterLabel = function(sFooterLabel) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getFooterRole footerRole}.
 * 
 * Landmark role of the footer container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Region</code>.
 * @param {sap.ui.core.AccessibleLandmarkRole} sFooterRole New value for property <code>footerRole</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setFooterRole = function(sFooterRole) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getHeaderLabel headerLabel}.
 * 
 * Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sHeaderLabel New value for property <code>headerLabel</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setHeaderLabel = function(sHeaderLabel) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getHeaderRole headerRole}.
 * 
 * Landmark role of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Banner</code>.
 * @param {sap.ui.core.AccessibleLandmarkRole} sHeaderRole New value for property <code>headerRole</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setHeaderRole = function(sHeaderRole) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getNavigationLabel navigationLabel}.
 * 
 * Texts which describe the landmark of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sNavigationLabel New value for property <code>navigationLabel</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setNavigationLabel = function(sNavigationLabel) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getNavigationRole navigationRole}.
 * 
 * Landmark role of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Navigation</code>.
 * @param {sap.ui.core.AccessibleLandmarkRole} sNavigationRole New value for property <code>navigationRole</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setNavigationRole = function(sNavigationRole) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getRootLabel rootLabel}.
 * 
 * Texts which describe the landmark of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sRootLabel New value for property <code>rootLabel</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setRootLabel = function(sRootLabel) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Sets a new value for property {@link #getRootRole rootRole}.
 * 
 * Landmark role of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Main</code>.
 * @param {sap.ui.core.AccessibleLandmarkRole} sRootRole New value for property <code>rootRole</code>
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageAccessibleLandmarkInfo.prototype.setRootRole = function(sRootRole) { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };


// ---- sap.uxap.ObjectPageConfigurationMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageConfigurationMode.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageDynamicHeaderContent --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageDynamicHeaderContent</code>.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Header content for the dynamic header of the {@link sap.uxap.ObjectPageLayout}.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>ObjectPageDynamicHeaderContent</code> represents the movable part of
 * the <code>ObjectPageLayout</code>'s dynamic header. It can contain any control and
 * scrolls along with the content of the page until it disappears (collapsed header).
 * When scrolled back to the top it becomes visible again (expanded header).
 * It contains all the additional information of the object.
 * 
 * Documentation links:
 * <ul>
 * <li>{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}</li>
 * <li>{@link topic:6e340c119ddd4c778b315f65a0432420 Object Page Dynamic Header}</li>
 * </ul>
 * 
 * @extends sap.f.DynamicPageHeader
 * @implements sap.uxap.IHeaderContent
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * @since 1.52
 * 
 */
sap.uxap.ObjectPageDynamicHeaderContent = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderContent with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.DynamicPageHeader.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageDynamicHeaderContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderContent.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageDynamicHeaderContent.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.uxap.ObjectPageDynamicHeaderTitle --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageDynamicHeaderTitle</code>.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Represents the static part (header title) of the dynamic header of the {@link sap.uxap.ObjectPageLayout}.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>ObjectPageDynamicHeaderTitle</code> is used to represent the most important details of
 * the displayed business object, such as the object title and actions that the user can perform.
 * 
 * <b>Note:</b> The <code>ObjectPageDynamicHeaderTitle</code> is meant to be used inside the <code>ObjectPageLayout</code>
 * control. Any other usage is not supported and can lead to unexpected behavior.
 * 
 * @extends sap.f.DynamicPageTitle
 * @implements sap.uxap.IHeaderTitle
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * @since 1.52
 * @see {@link topic:6e340c119ddd4c778b315f65a0432420 Object Page Dynamic Header}
 * @see {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
 * @see {@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}
 * 
 */
sap.uxap.ObjectPageDynamicHeaderTitle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderTitle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.DynamicPageTitle.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageDynamicHeaderTitle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderTitle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageDynamicHeaderTitle.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.uxap.ObjectPageHeader --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageHeader</code>.
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
 * <li>{@link #getObjectImageURI objectImageURI} : string</li>
 * <li>{@link #getObjectImageAlt objectImageAlt} : string (default: )</li>
 * <li>{@link #getObjectImageDensityAware objectImageDensityAware} : boolean (default: false)</li>
 * <li>{@link #getObjectTitle objectTitle} : string</li>
 * <li>{@link #getObjectSubtitle objectSubtitle} : string</li>
 * <li>{@link #getObjectImageShape objectImageShape} : sap.uxap.ObjectPageHeaderPictureShape (default: Square)</li>
 * <li>{@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible} : boolean (default: false)</li>
 * <li>{@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getHeaderDesign headerDesign} : sap.uxap.ObjectPageHeaderDesign (default: Light)</li>
 * <li>{@link #getShowTitleSelector showTitleSelector} : boolean (default: false)</li>
 * <li>{@link #getMarkFavorite markFavorite} : boolean (default: false)</li>
 * <li>{@link #getMarkFlagged markFlagged} : boolean (default: false)</li>
 * <li>{@link #getShowMarkers showMarkers} : boolean (default: false)</li>
 * <li>{@link #getMarkLocked markLocked} : boolean (default: false)</li>
 * <li>{@link #getShowPlaceholder showPlaceholder} : boolean (default: false)</li>
 * <li>{@link #getMarkChanges markChanges} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBreadcrumbs breadcrumbs} : sap.m.Breadcrumbs</li>
 * <li>{@link #getBreadCrumbsLinks breadCrumbsLinks} : sap.m.Link[]</li>
 * <li>{@link #getNavigationBar navigationBar} : sap.m.Bar</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getSideContentButton sideContentButton} : sap.m.Button</li>
 * <li>{@link #getTitleSelectorTooltip titleSelectorTooltip} : sap.ui.core.TooltipBase|string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:titleSelectorPress titleSelectorPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:markLockedPress markLockedPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:markChangesPress markChangesPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Represents the static part (header title) of the classic header of the {@link sap.uxap.ObjectPageLayout}.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>ObjectPageHeader</code> is used to display the basic information about a business object,
 * such as title/description/picture, as well as a list of common actions.
 * 
 * <b>Note:</b> The <code>ObjectPageHeader</code> is meant to be used inside the <code>ObjectPageLayout</code>
 * control. Any other usage is not supported and can lead to unexpected behavior.
 * 
 * @see {@link topic:0fecbce45e39406aa939bd25e89823f4 Object Page Classic Header}
 * @see {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
 * @see {@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ Object Page Header}
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/object-page/ UX Guidelines: Object Page}
 * 
 * @extends sap.ui.core.Control
 * @implements sap.uxap.IHeaderTitle
 * 
 * @constructor
 * @public
 * @since 1.26
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageHeader = function(sId,mSettings) {};
/**
 * The event is fired when the unsaved changes button is pressed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef DOM reference of the changed item's icon to be used for positioning.
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.markChangesPress = function(oControlEvent) {  };

/**
 * The event is fired when the Locked button is pressed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef DOM reference of the lock item's icon to be used for positioning.
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.markLockedPress = function(oControlEvent) {  };

/**
 * The event is fired when the objectPage header title selector (down-arrow) is pressed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef DOM reference of the title item's icon to be used for positioning.
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.titleSelectorPress = function(oControlEvent) {  };

/**
 * Adds some action to the aggregation {@link #getActions actions}.
 * @param {sap.ui.core.Control}
 *            oAction The action to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.addAction = function(oAction) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Adds some breadCrumbLink to the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
 * @param {sap.m.Link}
 *            oBreadCrumbLink The breadCrumbLink to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated as of version 1.50, use the <code>breadcrumbs</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.addBreadCrumbLink = function(oBreadCrumbLink) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:markChangesPress markChangesPress} event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.
 * 
 * The event is fired when the unsaved changes button is pressed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself
 * 
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.attachMarkChangesPress = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:markLockedPress markLockedPress} event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.
 * 
 * The event is fired when the Locked button is pressed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself
 * 
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.attachMarkLockedPress = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:titleSelectorPress titleSelectorPress} event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.
 * 
 * The event is fired when the objectPage header title selector (down-arrow) is pressed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself
 * 
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.attachTitleSelectorPress = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Destroys all the actions in the aggregation {@link #getActions actions}.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyActions = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Destroys the breadcrumbs in the aggregation {@link #getBreadcrumbs breadcrumbs}.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyBreadcrumbs = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Destroys all the breadCrumbsLinks in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated as of version 1.50, use the <code>breadcrumbs</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyBreadCrumbsLinks = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Destroys the navigationBar in the aggregation {@link #getNavigationBar navigationBar}.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyNavigationBar = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Destroys the sideContentButton in the aggregation {@link #getSideContentButton sideContentButton}.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.38.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroySideContentButton = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Destroys the titleSelectorTooltip in the aggregation {@link #getTitleSelectorTooltip titleSelectorTooltip}.
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.56
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.destroyTitleSelectorTooltip = function() { return new sap.uxap.ObjectPageHeader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:markChangesPress markChangesPress} event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.detachMarkChangesPress = function(fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:markLockedPress markLockedPress} event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.detachMarkLockedPress = function(fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:titleSelectorPress titleSelectorPress} event of this <code>sap.uxap.ObjectPageHeader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.detachTitleSelectorPress = function(fnFunction,oListener) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeader with name <code>sClassName</code>
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
sap.uxap.ObjectPageHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:markChangesPress markChangesPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.domRef] DOM reference of the changed item's icon to be used for positioning.
 * 
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.uxap.ObjectPageHeader.prototype.fireMarkChangesPress = function(mParameters) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Fires event {@link #event:markLockedPress markLockedPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.domRef] DOM reference of the lock item's icon to be used for positioning.
 * 
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.uxap.ObjectPageHeader.prototype.fireMarkLockedPress = function(mParameters) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Fires event {@link #event:titleSelectorPress titleSelectorPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.domRef] DOM reference of the title item's icon to be used for positioning.
 * 
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.uxap.ObjectPageHeader.prototype.fireTitleSelectorPress = function(mParameters) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Gets content of aggregation {@link #getActions actions}.
 * 
 * List of actions that will be displayed in the header.
 * You can use ObjectPageHeaderActionButton controls to achieve a different visual representation of the action buttons in the action bar and the action sheet (overflow menu).
 * You can use ObjectPageHeaderLayoutData to display a visual separator.
 * 
 * <b>Note:</b> If an action is placed inside the overflow area, an additional
 * <code>bInOverflow</code> parameter is passed along with the <code>press</code>
 * event to indicate that a popup shouldn't be opened from that action and a dialog
 * should be used instead.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getBreadcrumbs breadcrumbs}.
 * 
 * The breadcrumbs displayed in the <code>ObjectPageHeader</code>.
 * If this aggregation is set, the <code>breadCrumbsLinks</code> aggregation is omitted.
 * 
 * @returns {sap.m.Breadcrumbs}
 * @since 1.50
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getBreadcrumbs = function() { return new sap.m.Breadcrumbs(); };

/**
 * Gets content of aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
 * 
 * A list of all the active link elements in the BreadCrumbs control.
 * 
 * @returns {sap.m.Link[]}
 * 
 * @deprecated as of version 1.50, use the <code>breadcrumbs</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getBreadCrumbsLinks = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeaderDesign headerDesign}.
 * 
 * Determines the design of the header - Light or Dark.
 * <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme,
 * but it will not be taken into account for the Belize themes.
 * 
 * Default value is <code>Light</code>.
 * @returns {sap.uxap.ObjectPageHeaderDesign} Value of property <code>headerDesign</code>
 * 
 * @deprecated Since version 1.40.1
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getHeaderDesign = function() { return new sap.uxap.ObjectPageHeaderDesign(); };

/**
 * Gets current value of property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.
 * 
 * Determines whether the action buttons should always be visible or visible only when the header is snapped.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>isActionAreaAlwaysVisible</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsActionAreaAlwaysVisible = function() { return false; };

/**
 * Gets current value of property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.
 * 
 * Determines whether the icon should always be visible or visible only when the header is snapped.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isObjectIconAlwaysVisible</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsObjectIconAlwaysVisible = function() { return false; };

/**
 * Gets current value of property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.
 * 
 * Determines whether the subtitle should always be visible or visible only when the header is snapped.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>isObjectSubtitleAlwaysVisible</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsObjectSubtitleAlwaysVisible = function() { return false; };

/**
 * Gets current value of property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.
 * 
 * Determines whether the title should always be visible or visible only when the header is snapped.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>isObjectTitleAlwaysVisible</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getIsObjectTitleAlwaysVisible = function() { return false; };

/**
 * Gets current value of property {@link #getMarkChanges markChanges}.
 * 
 * Marks that there are unsaved changes in the objectPageHeader.
 * The markChanges state cannot be used together with the markLocked state.
 * If both are set to true, only the locked state will be displayed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>markChanges</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getMarkChanges = function() { return false; };

/**
 * Gets current value of property {@link #getMarkFavorite markFavorite}.
 * 
 * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>markFavorite</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getMarkFavorite = function() { return false; };

/**
 * Gets current value of property {@link #getMarkFlagged markFlagged}.
 * 
 * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>markFlagged</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getMarkFlagged = function() { return false; };

/**
 * Gets current value of property {@link #getMarkLocked markLocked}.
 * 
 * Set the locked state of the objectPageHeader.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>markLocked</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getMarkLocked = function() { return false; };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageHeader.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getNavigationBar navigationBar}.
 * 
 * An instance of sap.m.Bar to be embedded in the header
 * 
 * @returns {sap.m.Bar}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getNavigationBar = function() { return new sap.m.Bar(); };

/**
 * Gets current value of property {@link #getObjectImageAlt objectImageAlt}.
 * 
 * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>objectImageAlt</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageAlt = function() { return ""; };

/**
 * Gets current value of property {@link #getObjectImageDensityAware objectImageDensityAware}.
 * 
 * The value of densityAware for the image, supplied via the objectImageURI property.
 * See sap.m.Image for more details on densityAware.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>objectImageDensityAware</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageDensityAware = function() { return false; };

/**
 * Gets current value of property {@link #getObjectImageShape objectImageShape}.
 * 
 * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
 * 
 * Default value is <code>Square</code>.
 * @returns {sap.uxap.ObjectPageHeaderPictureShape} Value of property <code>objectImageShape</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageShape = function() { return new sap.uxap.ObjectPageHeaderPictureShape(); };

/**
 * Gets current value of property {@link #getObjectImageURI objectImageURI}.
 * 
 * The URL of the image, representing the business object
 * 
 * @returns {string} Value of property <code>objectImageURI</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectImageURI = function() { return ""; };

/**
 * Gets current value of property {@link #getObjectSubtitle objectSubtitle}.
 * 
 * The description of the object
 * 
 * @returns {string} Value of property <code>objectSubtitle</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectSubtitle = function() { return ""; };

/**
 * Gets current value of property {@link #getObjectTitle objectTitle}.
 * 
 * The title of the object
 * 
 * @returns {string} Value of property <code>objectTitle</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getObjectTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getShowMarkers showMarkers}.
 * 
 * Indicates if object page header title supports showing markers such as flagged and favorite.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showMarkers</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getShowMarkers = function() { return false; };

/**
 * Gets current value of property {@link #getShowPlaceholder showPlaceholder}.
 * 
 * Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showPlaceholder</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getShowPlaceholder = function() { return false; };

/**
 * Gets current value of property {@link #getShowTitleSelector showTitleSelector}.
 * 
 * When set to true, the selector arrow icon/image is shown and can be pressed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showTitleSelector</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getShowTitleSelector = function() { return false; };

/**
 * Gets content of aggregation {@link #getSideContentButton sideContentButton}.
 * 
 * A button that is used for opening the side content of the page or some additional content.
 * 
 * @returns {sap.m.Button}
 * @since 1.38.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getSideContentButton = function() { return new sap.m.Button(); };

/**
 * Gets content of aggregation {@link #getTitleSelectorTooltip titleSelectorTooltip}.
 * 
 * A custom tooltip for the title selector button.
 * 
 * The custom tooltip will be visible if the <code>showTitleSelector</code>
 * property is set to <code>true</code>.
 * 
 * <b>Note:</b> If the aggregation is destroyed or set to invalid value, the
 * default tooltip will be set. The default tooltip text is "Related options".
 * 
 * @returns {sap.ui.core.TooltipBase|string}
 * @since 1.56
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.getTitleSelectorTooltip = function() { return new sap.ui.core.TooltipBase(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getActions actions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oAction The action whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.m.Link</code> in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Link}
 *           oBreadCrumbLink The breadCrumbLink whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated as of version 1.50, use the <code>breadcrumbs</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.indexOfBreadCrumbLink = function(oBreadCrumbLink) { return 0; };

/**
 * Inserts a action into the aggregation {@link #getActions actions}.
 * 
 * @param {sap.ui.core.Control}
 *            oAction The action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.insertAction = function(oAction,iIndex) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Inserts a breadCrumbLink into the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
 * 
 * @param {sap.m.Link}
 *            oBreadCrumbLink The breadCrumbLink to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the breadCrumbLink should be inserted at; for
 *              a negative value of <code>iIndex</code>, the breadCrumbLink is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the breadCrumbLink is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated as of version 1.50, use the <code>breadcrumbs</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.insertBreadCrumbLink = function(oBreadCrumbLink,iIndex) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Removes a action from the aggregation {@link #getActions actions}.
 * 
 * @param {int | string | sap.ui.core.Control} vAction The action to remove or its index or id
 * @returns {sap.ui.core.Control} The removed action or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeAction = function(vAction) { return new sap.ui.core.Control(); };

/**
 * Removes all the controls from the aggregation {@link #getActions actions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Link[]} An array of the removed elements (might be empty)
 * 
 * @deprecated as of version 1.50, use the <code>breadcrumbs</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeAllBreadCrumbsLinks = function() { return new Array(); };

/**
 * Removes a breadCrumbLink from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
 * 
 * @param {int | string | sap.m.Link} vBreadCrumbLink The breadCrumbLink to remove or its index or id
 * @returns {sap.m.Link} The removed breadCrumbLink or <code>null</code>
 * 
 * @deprecated as of version 1.50, use the <code>breadcrumbs</code> aggregation instead.
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.removeBreadCrumbLink = function(vBreadCrumbLink) { return new sap.m.Link(); };

/**
 * Sets the aggregated {@link #getBreadcrumbs breadcrumbs}.
 * @param {sap.m.Breadcrumbs} oBreadcrumbs The breadcrumbs to set
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setBreadcrumbs = function(oBreadcrumbs) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getHeaderDesign headerDesign}.
 * 
 * Determines the design of the header - Light or Dark.
 * <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme,
 * but it will not be taken into account for the Belize themes.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Light</code>.
 * @param {sap.uxap.ObjectPageHeaderDesign} sHeaderDesign New value for property <code>headerDesign</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.40.1
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setHeaderDesign = function(sHeaderDesign) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.
 * 
 * Determines whether the action buttons should always be visible or visible only when the header is snapped.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsActionAreaAlwaysVisible New value for property <code>isActionAreaAlwaysVisible</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsActionAreaAlwaysVisible = function(bIsActionAreaAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.
 * 
 * Determines whether the icon should always be visible or visible only when the header is snapped.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsObjectIconAlwaysVisible New value for property <code>isObjectIconAlwaysVisible</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsObjectIconAlwaysVisible = function(bIsObjectIconAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.
 * 
 * Determines whether the subtitle should always be visible or visible only when the header is snapped.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsObjectSubtitleAlwaysVisible New value for property <code>isObjectSubtitleAlwaysVisible</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsObjectSubtitleAlwaysVisible = function(bIsObjectSubtitleAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.
 * 
 * Determines whether the title should always be visible or visible only when the header is snapped.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsObjectTitleAlwaysVisible New value for property <code>isObjectTitleAlwaysVisible</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setIsObjectTitleAlwaysVisible = function(bIsObjectTitleAlwaysVisible) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getMarkChanges markChanges}.
 * 
 * Marks that there are unsaved changes in the objectPageHeader.
 * The markChanges state cannot be used together with the markLocked state.
 * If both are set to true, only the locked state will be displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMarkChanges New value for property <code>markChanges</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setMarkChanges = function(bMarkChanges) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getMarkFavorite markFavorite}.
 * 
 * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMarkFavorite New value for property <code>markFavorite</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setMarkFavorite = function(bMarkFavorite) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getMarkFlagged markFlagged}.
 * 
 * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMarkFlagged New value for property <code>markFlagged</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setMarkFlagged = function(bMarkFlagged) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getMarkLocked markLocked}.
 * 
 * Set the locked state of the objectPageHeader.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMarkLocked New value for property <code>markLocked</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setMarkLocked = function(bMarkLocked) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets the aggregated {@link #getNavigationBar navigationBar}.
 * @param {sap.m.Bar} oNavigationBar The navigationBar to set
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setNavigationBar = function(oNavigationBar) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getObjectImageAlt objectImageAlt}.
 * 
 * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sObjectImageAlt New value for property <code>objectImageAlt</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageAlt = function(sObjectImageAlt) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getObjectImageDensityAware objectImageDensityAware}.
 * 
 * The value of densityAware for the image, supplied via the objectImageURI property.
 * See sap.m.Image for more details on densityAware.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bObjectImageDensityAware New value for property <code>objectImageDensityAware</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageDensityAware = function(bObjectImageDensityAware) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getObjectImageShape objectImageShape}.
 * 
 * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Square</code>.
 * @param {sap.uxap.ObjectPageHeaderPictureShape} sObjectImageShape New value for property <code>objectImageShape</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageShape = function(sObjectImageShape) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getObjectImageURI objectImageURI}.
 * 
 * The URL of the image, representing the business object
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sObjectImageURI New value for property <code>objectImageURI</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectImageURI = function(sObjectImageURI) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getObjectSubtitle objectSubtitle}.
 * 
 * The description of the object
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sObjectSubtitle New value for property <code>objectSubtitle</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectSubtitle = function(sObjectSubtitle) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getObjectTitle objectTitle}.
 * 
 * The title of the object
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sObjectTitle New value for property <code>objectTitle</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setObjectTitle = function(sObjectTitle) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getShowMarkers showMarkers}.
 * 
 * Indicates if object page header title supports showing markers such as flagged and favorite.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowMarkers New value for property <code>showMarkers</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setShowMarkers = function(bShowMarkers) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getShowPlaceholder showPlaceholder}.
 * 
 * Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowPlaceholder New value for property <code>showPlaceholder</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setShowPlaceholder = function(bShowPlaceholder) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets a new value for property {@link #getShowTitleSelector showTitleSelector}.
 * 
 * When set to true, the selector arrow icon/image is shown and can be pressed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowTitleSelector New value for property <code>showTitleSelector</code>
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setShowTitleSelector = function(bShowTitleSelector) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets the aggregated {@link #getSideContentButton sideContentButton}.
 * @param {sap.m.Button} oSideContentButton The sideContentButton to set
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.38.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setSideContentButton = function(oSideContentButton) { return new sap.uxap.ObjectPageHeader(); };

/**
 * Sets the aggregated {@link #getTitleSelectorTooltip titleSelectorTooltip}.
 * @param {sap.ui.core.TooltipBase|string} vTitleSelectorTooltip The titleSelectorTooltip to set
 * @returns {sap.uxap.ObjectPageHeader} Reference to <code>this</code> in order to allow method chaining
 * @since 1.56
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeader.prototype.setTitleSelectorTooltip = function(vTitleSelectorTooltip) { return new sap.uxap.ObjectPageHeader(); };


// ---- sap.uxap.ObjectPageHeaderActionButton --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageHeaderActionButton</code>.
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
 * <li>{@link #getHideText hideText} : boolean (default: true)</li>
 * <li>{@link #getHideIcon hideIcon} : boolean (default: false)</li>
 * <li>{@link #getImportance importance} : sap.uxap.Importance (default: High)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Button#constructor sap.m.Button}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A Button that is used in the <code>actions</code> aggregation of the {@link sap.uxap.ObjectPageHeader}.
 * 
 * @extends sap.m.Button
 * 
 * @constructor
 * @public
 * @since 1.26
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageHeaderActionButton = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderActionButton with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Button.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getHideIcon hideIcon}.
 * 
 * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>hideIcon</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.getHideIcon = function() { return false; };

/**
 * Gets current value of property {@link #getHideText hideText}.
 * 
 * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>hideText</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.getHideText = function() { return false; };

/**
 * Gets current value of property {@link #getImportance importance}.
 * 
 * Determines the order in which the button overflows.
 * 
 * Default value is <code>High</code>.
 * @returns {sap.uxap.Importance} Value of property <code>importance</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.getImportance = function() { return new sap.uxap.Importance(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageHeaderActionButton.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getHideIcon hideIcon}.
 * 
 * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHideIcon New value for property <code>hideIcon</code>
 * @returns {sap.uxap.ObjectPageHeaderActionButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.setHideIcon = function(bHideIcon) { return new sap.uxap.ObjectPageHeaderActionButton(); };

/**
 * Sets a new value for property {@link #getHideText hideText}.
 * 
 * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout.
 * This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHideText New value for property <code>hideText</code>
 * @returns {sap.uxap.ObjectPageHeaderActionButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.setHideText = function(bHideText) { return new sap.uxap.ObjectPageHeaderActionButton(); };

/**
 * Sets a new value for property {@link #getImportance importance}.
 * 
 * Determines the order in which the button overflows.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>High</code>.
 * @param {sap.uxap.Importance} sImportance New value for property <code>importance</code>
 * @returns {sap.uxap.ObjectPageHeaderActionButton} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderActionButton.prototype.setImportance = function(sImportance) { return new sap.uxap.ObjectPageHeaderActionButton(); };


// ---- sap.uxap.ObjectPageHeaderContent --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageHeaderContent</code>.
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
 * <li>{@link #getContentDesign contentDesign} : sap.uxap.ObjectPageHeaderDesign (default: Light)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
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
 * Header content for the classic header of the {@link sap.uxap.ObjectPageLayout}.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>ObjectPageHeaderContent</code> represents the movable part of the
 * <code>ObjectPageLayout</code>'s classic header. It can contain any control and scrolls along with
 * the content of the page until it disappears (collapsed header). When scrolled back to the
 * top it becomes visible again (expanded header). It contains all the additional information of the object.
 * 
 * Documentation links:
 * <ul>
 * <li>{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}</li>
 * <li>{@link topic:0fecbce45e39406aa939bd25e89823f4 Object Page Classic Header}</li>
 * <li>{@link https://experience.sap.com/fiori-design-web/object-page/ UX Guidelines: Object Page}</li>
 * </ul>
 * 
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/#header-content Object Page Header Content}
 * 
 * @extends sap.ui.core.Control
 * @implements sap.uxap.IHeaderContent
 * 
 * @constructor
 * @public
 * @since 1.30
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageHeaderContent = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageHeaderContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.addContent = function(oContent) { return new sap.uxap.ObjectPageHeaderContent(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.uxap.ObjectPageHeaderContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.destroyContent = function() { return new sap.uxap.ObjectPageHeaderContent(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderContent with name <code>sClassName</code>
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
sap.uxap.ObjectPageHeaderContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The list of Objects of type sap.ui.core.Control.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getContentDesign contentDesign}.
 * 
 * Determines the design of the header - Light or Dark.
 * <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme,
 * but it will not be taken into account for the Belize themes.
 * 
 * Default value is <code>Light</code>.
 * @returns {sap.uxap.ObjectPageHeaderDesign} Value of property <code>contentDesign</code>
 * 
 * @deprecated Since version 1.40.1
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.getContentDesign = function() { return new sap.uxap.ObjectPageHeaderDesign(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageHeaderContent.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderContent.getMetadata = function() { return new sap.ui.base.Metadata(); };

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
sap.uxap.ObjectPageHeaderContent.prototype.indexOfContent = function(oContent) { return 0; };

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
 * @returns {sap.uxap.ObjectPageHeaderContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.insertContent = function(oContent,iIndex) { return new sap.uxap.ObjectPageHeaderContent(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getContentDesign contentDesign}.
 * 
 * Determines the design of the header - Light or Dark.
 * <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme,
 * but it will not be taken into account for the Belize themes.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Light</code>.
 * @param {sap.uxap.ObjectPageHeaderDesign} sContentDesign New value for property <code>contentDesign</code>
 * @returns {sap.uxap.ObjectPageHeaderContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.40.1
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderContent.prototype.setContentDesign = function(sContentDesign) { return new sap.uxap.ObjectPageHeaderContent(); };


// ---- sap.uxap.ObjectPageHeaderDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageHeaderDesign.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageHeaderLayoutData --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageHeaderLayoutData</code>.
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
 * <li>{@link #getVisibleS visibleS} : boolean (default: true)</li>
 * <li>{@link #getVisibleM visibleM} : boolean (default: true)</li>
 * <li>{@link #getVisibleL visibleL} : boolean (default: true)</li>
 * <li>{@link #getShowSeparatorBefore showSeparatorBefore} : boolean (default: false)</li>
 * <li>{@link #getShowSeparatorAfter showSeparatorAfter} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: auto)</li>
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
 * A {@link sap.ui.core.LayoutData} element that can be added to controls used in the
 * <code>headerContent</code> aggregation of the <code>ObjectPageLayout</code>.
 * 
 * <b>Note:</b> This element is only taken into account when the <code>sap.uxap.ObjectPageLayout</code> control is used together with
 * <code>sap.uxap.ObjectPageHeader</code> as value of <code>headerTitle</code>.
 * @extends sap.ui.core.LayoutData
 * 
 * @constructor
 * @public
 * @since 1.26
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeaderLayoutData with name <code>sClassName</code>
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
sap.uxap.ObjectPageHeaderLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageHeaderLayoutData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowSeparatorAfter showSeparatorAfter}.
 * 
 * If this property is set the control will display a separator after it.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showSeparatorAfter</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getShowSeparatorAfter = function() { return false; };

/**
 * Gets current value of property {@link #getShowSeparatorBefore showSeparatorBefore}.
 * 
 * If this property is set the control will display a separator before it.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showSeparatorBefore</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getShowSeparatorBefore = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleL visibleL}.
 * 
 * If this property is set the control will be visible (or not) in a large sized layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleL</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getVisibleL = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleM visibleM}.
 * 
 * If this property is set the control will be visible (or not) in a medium sized layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleM</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getVisibleM = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleS visibleS}.
 * 
 * If this property is set the control will be visible (or not) in a small sized layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleS</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getVisibleS = function() { return false; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * If this property is set the control will take the provided size.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getShowSeparatorAfter showSeparatorAfter}.
 * 
 * If this property is set the control will display a separator after it.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowSeparatorAfter New value for property <code>showSeparatorAfter</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setShowSeparatorAfter = function(bShowSeparatorAfter) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property {@link #getShowSeparatorBefore showSeparatorBefore}.
 * 
 * If this property is set the control will display a separator before it.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowSeparatorBefore New value for property <code>showSeparatorBefore</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setShowSeparatorBefore = function(bShowSeparatorBefore) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property {@link #getVisibleL visibleL}.
 * 
 * If this property is set the control will be visible (or not) in a large sized layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleL New value for property <code>visibleL</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setVisibleL = function(bVisibleL) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property {@link #getVisibleM visibleM}.
 * 
 * If this property is set the control will be visible (or not) in a medium sized layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleM New value for property <code>visibleM</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setVisibleM = function(bVisibleM) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property {@link #getVisibleS visibleS}.
 * 
 * If this property is set the control will be visible (or not) in a small sized layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleS New value for property <code>visibleS</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setVisibleS = function(bVisibleS) { return new sap.uxap.ObjectPageHeaderLayoutData(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * If this property is set the control will take the provided size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.uxap.ObjectPageHeaderLayoutData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderLayoutData.prototype.setWidth = function(sWidth) { return new sap.uxap.ObjectPageHeaderLayoutData(); };


// ---- sap.uxap.ObjectPageHeaderPictureShape --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageHeaderPictureShape.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageLayout --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageLayout</code>.
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
 * <li>{@link #getShowAnchorBar showAnchorBar} : boolean (default: true)</li>
 * <li>{@link #getShowAnchorBarPopover showAnchorBarPopover} : boolean (default: true)</li>
 * <li>{@link #getUpperCaseAnchorBar upperCaseAnchorBar} : boolean (default: true)</li>
 * <li>{@link #getBackgroundDesignAnchorBar backgroundDesignAnchorBar} : sap.m.BackgroundDesign</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getEnableLazyLoading enableLazyLoading} : boolean (default: false)</li>
 * <li>{@link #getSubSectionLayout subSectionLayout} : sap.uxap.ObjectPageSubSectionLayout (default: TitleOnTop)</li>
 * <li>{@link #getSectionTitleLevel sectionTitleLevel} : sap.ui.core.TitleLevel (default: Auto)</li>
 * <li>{@link #getUseIconTabBar useIconTabBar} : boolean (default: false)</li>
 * <li>{@link #getShowHeaderContent showHeaderContent} : boolean (default: true)</li>
 * <li>{@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen} : boolean (default: false)</li>
 * <li>{@link #getShowTitleInHeaderContent showTitleInHeaderContent} : boolean (default: false)</li>
 * <li>{@link #getShowOnlyHighImportance showOnlyHighImportance} : boolean (default: false)</li>
 * <li>{@link #getIsChildPage isChildPage} : boolean (default: false)</li>
 * <li>{@link #getAlwaysShowContentHeader alwaysShowContentHeader} : boolean (default: false)</li>
 * <li>{@link #getHeaderContentPinnable headerContentPinnable} : boolean (default: true)</li>
 * <li>{@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick} : boolean (default: true)</li>
 * <li>{@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll} : boolean (default: false)</li>
 * <li>{@link #getShowEditHeaderButton showEditHeaderButton} : boolean (default: false)</li>
 * <li>{@link #getFlexEnabled flexEnabled} : boolean (default: false)</li>
 * <li>{@link #getShowFooter showFooter} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSections sections} : sap.uxap.ObjectPageSection[] (default)</li>
 * <li>{@link #getHeaderTitle headerTitle} : sap.uxap.IHeaderTitle</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getFooter footer} : sap.m.IBar</li>
 * <li>{@link #getLandmarkInfo landmarkInfo} : sap.uxap.ObjectPageAccessibleLandmarkInfo</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedSection selectedSection} : (sap.ui.core.ID | sap.uxap.ObjectPageSection)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:toggleAnchorBar toggleAnchorBar} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:editHeaderButtonPress editHeaderButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * A layout that allows apps to easily display information related to a business object.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>ObjectPageLayout</code> layout is composed of a header (title and content),
 * an optional anchor bar and block content wrapped in sections and subsections that
 * structure the information.
 * 
 * <h3>Structure</h3>
 * 
 * An <code>ObjectPageLayout</code> control is used to put together all parts of an Object page
 * - Header, optional Anchor Bar and Sections/Subsections.
 * 
 * <h4>Header</h4>
 * The <code>ObjectPageLayout</code> implements the snapping header concept. This means that
 * the upper part of the header (Header Title) always stays visible, while the lower part
 * (Header Content) can scroll out of view.
 * 
 * Header Title is displayed at the top of the header and always remains visible above the
 * scrollable content of the page. It contains the title and most prominent details of the object.
 * 
 * The Header Content scrolls along with the content of the page until it disappears (collapsed header).
 * When scrolled back to the top it becomes visible again (expanded header). It contains all the
 * additional information of the object.
 * 
 * <h4>Anchor Bar</h4>
 * The Anchor Bar is an automatically generated internal menu that shows the titles of the sections
 * and subsections and allows the user to scroll to the respective section and subsection content.
 * 
 * <h4>Sections, Subsections, Blocks</h4>
 * The content of the page that appears bellow the header is composed of blocks structured into
 * sections and subsections.
 * 
 * <h3>Usage</h3>
 * Use the <code>ObjectPageLayout</code> if:
 * <ul>
 * <li>The users need to see, edit, or create an item with all its details.</li>
 * <li>Users need to get an overview of an object and interact with different parts of the object.</li>
 * </ul>
 * 
 * <h3>Responsive behavior</h3>
 * 
 * The <code>ObjectPageLayout</code> is responsive and adapts to all screen sizes.
 * 
 * @see {@link topic:2e61ab6c68a2480eb666c1927a707658 Object Page Layout}
 * @see {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
 * @see {@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}
 * @see {@link topic:4527729576cb4a4888275b6935aad03a Object Page Blocks}
 * @see {@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}
 * @see {@link topic:bc410e94e46540efa02857e15aae583f Object Page Scrolling}
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/object-page/ Object Page Layout}
 * @see {@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ UX Guidelines: Object Page - Snapping Header}
 * 
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @since 1.26
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageLayout = function(sId,mSettings) {};
/**
 * The event is fired when the Edit Header button is pressed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.editHeaderButtonPress = function(oControlEvent) {  };

/**
 * The event is fired when the selected section is changed using the navigation.
 * @event
 * @since 1.40
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.uxap.ObjectPageSection} oControlEvent.getParameters.section The selected section object.
 * @param {sap.uxap.ObjectPageSubSection} oControlEvent.getParameters.subSection The selected subsection object.
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.navigate = function(oControlEvent) {  };

/**
 * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.fixed False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header.
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.toggleAnchorBar = function(oControlEvent) {  };

/**
 * Un-sets the flag that deactivates scrolling requested with the <code>sap.uxap.ObjectPageLayout.prototype._scrollTo</code> function
 * This flag is used by RTA for the purpose of postponing/resuming the auto-scrolling of the ObjectPage to its selected section
 * so that the scrolling does not start before RTA operation fully completed
 * @private
 * @ui5-restricted
 * 
 */
sap.uxap.ObjectPageLayout.prototype._resumeScroll = function() {  };

/**
 * Sets a flag to [temporarily] deactivate any scrolling requested with the <code>sap.uxap.ObjectPageLayout.prototype._scrollTo</code> function
 * This flag is used by RTA for the purpose of postponing the auto-scrolling of the ObjectPage to its selected section
 * so that the scrolling does not start before RTA operation fully completed
 * @private
 * @ui5-restricted
 * 
 */
sap.uxap.ObjectPageLayout.prototype._suppressScroll = function() {  };

/**
 * Resets the internal information of which subsections are in view and immediately
 * calls the layout calculation so that an event <code>subSectionEnteredViewPort</code> is fired
 * for the subsections that are actually in view. Use this method after a change in bindings
 * to the existing object, since it's layout might have changed and the app
 * needs to react to the new subsections in view.
 * @private
 * @ui5-restricted
 * 
 */
sap.uxap.ObjectPageLayout.prototype._triggerVisibleSubSectionsEvents = function() {  };

/**
 * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
 * @param {sap.ui.core.Control}
 *            oHeaderContent The headerContent to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.addHeaderContent = function(oHeaderContent) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Adds some section to the aggregation {@link #getSections sections}.
 * @param {sap.uxap.ObjectPageSection}
 *            oSection The section to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.addSection = function(oSection) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:editHeaderButtonPress editHeaderButtonPress} event of this <code>sap.uxap.ObjectPageLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.
 * 
 * The event is fired when the Edit Header button is pressed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself
 * 
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.attachEditHeaderButtonPress = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:navigate navigate} event of this <code>sap.uxap.ObjectPageLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.
 * 
 * The event is fired when the selected section is changed using the navigation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself
 * 
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.40
 * 
 */
sap.uxap.ObjectPageLayout.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:toggleAnchorBar toggleAnchorBar} event of this <code>sap.uxap.ObjectPageLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.
 * 
 * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself
 * 
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.attachToggleAnchorBar = function(oData,fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Destroys the footer in the aggregation {@link #getFooter footer}.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.40
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroyFooter = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroyHeaderContent = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * Destroys the headerTitle in the aggregation {@link #getHeaderTitle headerTitle}.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroyHeaderTitle = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.61
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroyLandmarkInfo = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * Destroys all the sections in the aggregation {@link #getSections sections}.
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.destroySections = function() { return new sap.uxap.ObjectPageLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:editHeaderButtonPress editHeaderButtonPress} event of this <code>sap.uxap.ObjectPageLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.detachEditHeaderButtonPress = function(fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:navigate navigate} event of this <code>sap.uxap.ObjectPageLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.40
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:toggleAnchorBar toggleAnchorBar} event of this <code>sap.uxap.ObjectPageLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.detachToggleAnchorBar = function(fnFunction,oListener) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageLayout with name <code>sClassName</code>
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
sap.uxap.ObjectPageLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:editHeaderButtonPress editHeaderButtonPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.uxap.ObjectPageLayout.prototype.fireEditHeaderButtonPress = function(mParameters) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Fires event {@link #event:navigate navigate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.uxap.ObjectPageSection} [mParameters.section] The selected section object.
 * @param {sap.uxap.ObjectPageSubSection} [mParameters.subSection] The selected subsection object.
 * 
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.40
 * 
 */
sap.uxap.ObjectPageLayout.prototype.fireNavigate = function(mParameters) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Fires event {@link #event:toggleAnchorBar toggleAnchorBar} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {boolean} [mParameters.fixed] False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header.
 * 
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.uxap.ObjectPageLayout.prototype.fireToggleAnchorBar = function(mParameters) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Gets current value of property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.
 * 
 * Determines whether Header Content will always be expanded on desktop.
 * 
 * <b>Note</b>: This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>alwaysShowContentHeader</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getAlwaysShowContentHeader = function() { return false; };

/**
 * Gets current value of property {@link #getBackgroundDesignAnchorBar backgroundDesignAnchorBar}.
 * 
 * Determines the background color of the <code>AnchorBar</code>.
 * 
 * <b>Note:</b> The default value of <code>backgroundDesignAnchorBar</code> property is null.
 * If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>,
 * which depends on the specific theme.
 * 
 * @returns {sap.m.BackgroundDesign} Value of property <code>backgroundDesignAnchorBar</code>
 * @since 1.58
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getBackgroundDesignAnchorBar = function() { return new sap.m.BackgroundDesign(); };

/**
 * Gets current value of property {@link #getEnableLazyLoading enableLazyLoading}.
 * 
 * Enable lazy loading for the Object page Subsections.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableLazyLoading</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getEnableLazyLoading = function() { return false; };

/**
 * Gets current value of property {@link #getFlexEnabled flexEnabled}.
 * 
 * Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br>
 * For more information about SAPUI5 flexibility, refer to the Developer Guide.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>flexEnabled</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getFlexEnabled = function() { return false; };

/**
 * Gets content of aggregation {@link #getFooter footer}.
 * 
 * Object page floating footer.
 * 
 * @returns {sap.m.IBar}
 * @since 1.40
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getFooter = function() { return new sap.m.IBar(); };

/**
 * Gets content of aggregation {@link #getHeaderContent headerContent}.
 * 
 * Object page header content - the dynamic part of the Object page header.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getHeaderContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeaderContentPinnable headerContentPinnable}.
 * 
 * Determines whether the Header Content area can be pinned.
 * 
 * When set to <code>true</code>, a pin button is displayed within the Header Content area.
 * The pin button allows the user to make the Header Content always visible
 * at the top of the page above any scrollable content.
 * 
 * <b>Note:</b> This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>headerContentPinnable</code>
 * @since 1.52
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getHeaderContentPinnable = function() { return false; };

/**
 * Gets content of aggregation {@link #getHeaderTitle headerTitle}.
 * 
 * Object page header title - the upper, always static, part of the Object page header.
 * 
 * @returns {sap.uxap.IHeaderTitle}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getHeaderTitle = function() { return new sap.uxap.IHeaderTitle(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Determines the height of the ObjectPage.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getIsChildPage isChildPage}.
 * 
 * Determines whether the page is a child page and renders it with a different design.
 * Child pages have an additional (darker/lighter) stripe on the left side of their header content area.
 * 
 * <b>Note</b>: This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isChildPage</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getIsChildPage = function() { return false; };

/**
 * Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.
 * 
 * Accessible landmark settings to be applied on the containers of the <code>sap.uxap.ObjectPageLayout</code> control.
 * 
 * If not set, no landmarks will be written.
 * 
 * @returns {sap.uxap.ObjectPageAccessibleLandmarkInfo}
 * @since 1.61
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getLandmarkInfo = function() { return new sap.uxap.ObjectPageAccessibleLandmarkInfo(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Notes:</b>
 * <ul><li>This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</li>
 * <li>Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the control`s title and header
 * are with height larger than the given threshold.</li></ul>
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>preserveHeaderStateOnScroll</code>
 * @since 1.52
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getPreserveHeaderStateOnScroll = function() { return false; };

/**
 * Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling
 * 
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getScrollDelegate = function() { return new Object(); };

/**
 * Returns the UI5 ID of the Section that is currently being scrolled.
 * 
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getScrollingSectionId = function() { return ""; };

/**
 * Gets content of aggregation {@link #getSections sections}.
 * 
 * The sections that make up the Object page content area.
 * 
 * @returns {sap.uxap.ObjectPageSection[]}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getSections = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSectionTitleLevel sectionTitleLevel}.
 * 
 * Determines the ARIA level of the <code>ObjectPageSection</code> and <code>ObjectPageSubSection</code> titles.
 * The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
 * 
 * <br><b>Note:</b>
 * <ul>
 * <li>Defining a <code>sectionTitleLevel</code> will add <code>aria-level</code> attribute from 1 to 6
 * instead of changing the titles` HTML tag from H1 to H6.
 * <br>For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>,
 * it will result as aria-level of 1 added to the <code>ObjectPageSection</code> title.
 * </li>
 * 
 * <li> The <code>ObjectPageSubSection</code> title
 * would have <code>aria-level</code> one level lower than the defined.
 * For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>,
 * it will result as aria-level of 2 added to the <code>ObjectPageSubSection</code> title.</li>
 * 
 * <li> It is possible to define a <code>titleLevel</code> on <code>ObjectPageSection</code> or <code>ObjectPageSubSection</code> level.
 * In this case the value of this property will be ignored.
 * </li>
 * </ul>
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.ui.core.TitleLevel} Value of property <code>sectionTitleLevel</code>
 * @since 1.44.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getSectionTitleLevel = function() { return new sap.ui.core.TitleLevel(); };

/**
 * ID of the element which is the current target of the association {@link #getSelectedSection selectedSection}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * @since 1.44.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getSelectedSection = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getShowAnchorBar showAnchorBar}.
 * 
 * Determines whether the Navigation bar (Anchor bar) is displayed.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showAnchorBar</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowAnchorBar = function() { return false; };

/**
 * Gets current value of property {@link #getShowAnchorBarPopover showAnchorBarPopover}.
 * 
 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showAnchorBarPopover</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowAnchorBarPopover = function() { return false; };

/**
 * Gets current value of property {@link #getShowEditHeaderButton showEditHeaderButton}.
 * 
 * Determines whether an Edit button will be displayed in Header Content.
 * 
 * <b>Note</b>: This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showEditHeaderButton</code>
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowEditHeaderButton = function() { return false; };

/**
 * Gets current value of property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showFooter</code>
 * @since 1.40
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowFooter = function() { return false; };

/**
 * Gets current value of property {@link #getShowHeaderContent showHeaderContent}.
 * 
 * Determines the visibility of the Header content (headerContent aggregation).
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showHeaderContent</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowHeaderContent = function() { return false; };

/**
 * Gets current value of property {@link #getShowOnlyHighImportance showOnlyHighImportance}.
 * 
 * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showOnlyHighImportance</code>
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowOnlyHighImportance = function() { return false; };

/**
 * Gets current value of property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.
 * 
 * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
 * 
 * <b>Note</b>: This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</li>
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showTitleInHeaderContent</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getShowTitleInHeaderContent = function() { return false; };

/**
 * Gets current value of property {@link #getSubSectionLayout subSectionLayout}.
 * 
 * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
 * 
 * Default value is <code>TitleOnTop</code>.
 * @returns {sap.uxap.ObjectPageSubSectionLayout} Value of property <code>subSectionLayout</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getSubSectionLayout = function() { return new sap.uxap.ObjectPageSubSectionLayout(); };

/**
 * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the user can switch between the expanded/collapsed states of the
 * <code>sap.uxap.ObjectPageDynamicHeaderContent</code> by clicking on the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code>.
 * If set to <code>false</code>, the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is not clickable and the application
 * must provide other means for expanding/collapsing the <code>sap.uxap.ObjectPageDynamicHeaderContent</code>, if necessary.
 * 
 * <b>Note:</b> This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>toggleHeaderOnTitleClick</code>
 * @since 1.52
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getToggleHeaderOnTitleClick = function() { return false; };

/**
 * Gets current value of property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.
 * 
 * Determines whether the Anchor bar items are displayed in upper case.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>upperCaseAnchorBar</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getUpperCaseAnchorBar = function() { return false; };

/**
 * Gets current value of property {@link #getUseIconTabBar useIconTabBar}.
 * 
 * Determines whether the navigation mode is tab-based instead of the default anchor bar. If enabled,
 * the sections are displayed separately on each tab rather than having all of them visible at the same time.
 * 
 * <b>Note:</b> Keep in mind that the <code>sap.m.IconTabBar</code> control is no longer used for the tab navigation mode.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>useIconTabBar</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getUseIconTabBar = function() { return false; };

/**
 * Gets current value of property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.
 * 
 * Determines whether the to use two column layout for the L screen size.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>useTwoColumnsForLargeScreen</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.getUseTwoColumnsForLargeScreen = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getHeaderContent headerContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oHeaderContent The headerContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * Checks for the provided <code>sap.uxap.ObjectPageSection</code> in the aggregation {@link #getSections sections}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.uxap.ObjectPageSection}
 *           oSection The section whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.indexOfSection = function(oSection) { return 0; };

/**
 * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oHeaderContent The headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the headerContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headerContent is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Inserts a section into the aggregation {@link #getSections sections}.
 * 
 * @param {sap.uxap.ObjectPageSection}
 *            oSection The section to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the section should be inserted at; for
 *              a negative value of <code>iIndex</code>, the section is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the section is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.insertSection = function(oSection,iIndex) { return new sap.uxap.ObjectPageLayout(); };

/**
 * This triggers rerendering of itself and its children.
 * @param {sap.ui.base.ManagedObject} [oOrigin] Child control for which the method was called</br>
 * If the child is an instance of <code>sap.uxap.ObjectPageSection</code> that corresponds to an inactive tab, the invalidation will be suppressed (in iconTabBar mode)
 * 
 * @protected
 * 
 */
sap.uxap.ObjectPageLayout.prototype.invalidate = function(oOrigin) {  };

/**
 * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getSections sections}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.uxap.ObjectPageSection[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeAllSections = function() { return new Array(); };

/**
 * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vHeaderContent The headerContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed headerContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.core.Control(); };

/**
 * Removes a section from the aggregation {@link #getSections sections}.
 * 
 * @param {int | string | sap.uxap.ObjectPageSection} vSection The section to remove or its index or id
 * @returns {sap.uxap.ObjectPageSection} The removed section or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.removeSection = function(vSection) { return new sap.uxap.ObjectPageSection(); };

/**
 * Scrolls the Object page to the given Section.
 * 
 * @param {string} sId The Section ID to scroll to
 * @param {int} iDuration Scroll duration (in ms). Default value is 0
 * @param {int} iOffset Additional pixels to scroll
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageLayout.prototype.scrollToSection = function(sId,iDuration,iOffset) {  };

/**
 * Sets a new value for property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.
 * 
 * Determines whether Header Content will always be expanded on desktop.
 * 
 * <b>Note</b>: This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAlwaysShowContentHeader New value for property <code>alwaysShowContentHeader</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setAlwaysShowContentHeader = function(bAlwaysShowContentHeader) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets the value of the <code>backgroundDesignAnchorBar</code> property.
 * 
 * @param {sap.m.BackgroundDesign} sBackgroundDesignAnchorBar - new value of the <code>backgroundDesignAnchorBar</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.58
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setBackgroundDesignAnchorBar = function(sBackgroundDesignAnchorBar) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getEnableLazyLoading enableLazyLoading}.
 * 
 * Enable lazy loading for the Object page Subsections.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableLazyLoading New value for property <code>enableLazyLoading</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setEnableLazyLoading = function(bEnableLazyLoading) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getFlexEnabled flexEnabled}.
 * 
 * Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br>
 * For more information about SAPUI5 flexibility, refer to the Developer Guide.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFlexEnabled New value for property <code>flexEnabled</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setFlexEnabled = function(bFlexEnabled) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets the aggregated {@link #getFooter footer}.
 * @param {sap.m.IBar} oFooter The footer to set
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.40
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setFooter = function(oFooter) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getHeaderContentPinnable headerContentPinnable}.
 * 
 * Determines whether the Header Content area can be pinned.
 * 
 * When set to <code>true</code>, a pin button is displayed within the Header Content area.
 * The pin button allows the user to make the Header Content always visible
 * at the top of the page above any scrollable content.
 * 
 * <b>Note:</b> This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderContentPinnable New value for property <code>headerContentPinnable</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setHeaderContentPinnable = function(bHeaderContentPinnable) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets the aggregated {@link #getHeaderTitle headerTitle}.
 * @param {sap.uxap.IHeaderTitle} oHeaderTitle The headerTitle to set
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setHeaderTitle = function(oHeaderTitle) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Determines the height of the ObjectPage.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setHeight = function(sHeight) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getIsChildPage isChildPage}.
 * 
 * Determines whether the page is a child page and renders it with a different design.
 * Child pages have an additional (darker/lighter) stripe on the left side of their header content area.
 * 
 * <b>Note</b>: This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsChildPage New value for property <code>isChildPage</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setIsChildPage = function(bIsChildPage) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets the aggregated {@link #getLandmarkInfo landmarkInfo}.
 * @param {sap.uxap.ObjectPageAccessibleLandmarkInfo} oLandmarkInfo The landmarkInfo to set
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.61
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setLandmarkInfo = function(oLandmarkInfo) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Notes:</b>
 * <ul><li>This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</li>
 * <li>Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the control`s title and header
 * are with height larger than the given threshold.</li></ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPreserveHeaderStateOnScroll New value for property <code>preserveHeaderStateOnScroll</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setPreserveHeaderStateOnScroll = function(bPreserveHeaderStateOnScroll) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getSectionTitleLevel sectionTitleLevel}.
 * 
 * Determines the ARIA level of the <code>ObjectPageSection</code> and <code>ObjectPageSubSection</code> titles.
 * The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
 * 
 * <br><b>Note:</b>
 * <ul>
 * <li>Defining a <code>sectionTitleLevel</code> will add <code>aria-level</code> attribute from 1 to 6
 * instead of changing the titles` HTML tag from H1 to H6.
 * <br>For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>,
 * it will result as aria-level of 1 added to the <code>ObjectPageSection</code> title.
 * </li>
 * 
 * <li> The <code>ObjectPageSubSection</code> title
 * would have <code>aria-level</code> one level lower than the defined.
 * For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>,
 * it will result as aria-level of 2 added to the <code>ObjectPageSubSection</code> title.</li>
 * 
 * <li> It is possible to define a <code>titleLevel</code> on <code>ObjectPageSection</code> or <code>ObjectPageSubSection</code> level.
 * In this case the value of this property will be ignored.
 * </li>
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.ui.core.TitleLevel} sSectionTitleLevel New value for property <code>sectionTitleLevel</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.44.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setSectionTitleLevel = function(sSectionTitleLevel) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets the section that should be selected.
 * 
 * The section can either be given by itself or by its id.
 * 
 * Note that an argument of <code>null</code> will cause the first visible section be set as <code>selectedSection</code>.
 * This is because the <code>sap.uxap.ObjectPageLayout</code> should always have one of its sections selected (unless it has 0 visible sections).
 * 
 * @param {string | sap.uxap.ObjectPageSection} sId
 *            The ID or the section instance that should be selected
 *            Note that <code>null</code> or <code>undefined</code> are not valid arguments
 * @return {sap.uxap.ObjectPageLayout} Returns <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setSelectedSection = function(sId) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getShowAnchorBar showAnchorBar}.
 * 
 * Determines whether the Navigation bar (Anchor bar) is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowAnchorBar New value for property <code>showAnchorBar</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowAnchorBar = function(bShowAnchorBar) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getShowAnchorBarPopover showAnchorBarPopover}.
 * 
 * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowAnchorBarPopover New value for property <code>showAnchorBarPopover</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowAnchorBarPopover = function(bShowAnchorBarPopover) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getShowEditHeaderButton showEditHeaderButton}.
 * 
 * Determines whether an Edit button will be displayed in Header Content.
 * 
 * <b>Note</b>: This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowEditHeaderButton New value for property <code>showEditHeaderButton</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowEditHeaderButton = function(bShowEditHeaderButton) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowFooter New value for property <code>showFooter</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.40
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowFooter = function(bShowFooter) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getShowHeaderContent showHeaderContent}.
 * 
 * Determines the visibility of the Header content (headerContent aggregation).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowHeaderContent New value for property <code>showHeaderContent</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowHeaderContent = function(bShowHeaderContent) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getShowOnlyHighImportance showOnlyHighImportance}.
 * 
 * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowOnlyHighImportance New value for property <code>showOnlyHighImportance</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowOnlyHighImportance = function(bShowOnlyHighImportance) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.
 * 
 * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
 * 
 * <b>Note</b>: This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</li>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowTitleInHeaderContent New value for property <code>showTitleInHeaderContent</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setShowTitleInHeaderContent = function(bShowTitleInHeaderContent) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getSubSectionLayout subSectionLayout}.
 * 
 * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>TitleOnTop</code>.
 * @param {sap.uxap.ObjectPageSubSectionLayout} sSubSectionLayout New value for property <code>subSectionLayout</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setSubSectionLayout = function(sSubSectionLayout) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the user can switch between the expanded/collapsed states of the
 * <code>sap.uxap.ObjectPageDynamicHeaderContent</code> by clicking on the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code>.
 * If set to <code>false</code>, the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is not clickable and the application
 * must provide other means for expanding/collapsing the <code>sap.uxap.ObjectPageDynamicHeaderContent</code>, if necessary.
 * 
 * <b>Note:</b> This property is only taken into account if an instance of
 * <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bToggleHeaderOnTitleClick New value for property <code>toggleHeaderOnTitleClick</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.52
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setToggleHeaderOnTitleClick = function(bToggleHeaderOnTitleClick) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.
 * 
 * Determines whether the Anchor bar items are displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUpperCaseAnchorBar New value for property <code>upperCaseAnchorBar</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setUpperCaseAnchorBar = function(bUpperCaseAnchorBar) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getUseIconTabBar useIconTabBar}.
 * 
 * Determines whether the navigation mode is tab-based instead of the default anchor bar. If enabled,
 * the sections are displayed separately on each tab rather than having all of them visible at the same time.
 * 
 * <b>Note:</b> Keep in mind that the <code>sap.m.IconTabBar</code> control is no longer used for the tab navigation mode.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUseIconTabBar New value for property <code>useIconTabBar</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setUseIconTabBar = function(bUseIconTabBar) { return new sap.uxap.ObjectPageLayout(); };

/**
 * Sets a new value for property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.
 * 
 * Determines whether the to use two column layout for the L screen size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUseTwoColumnsForLargeScreen New value for property <code>useTwoColumnsForLargeScreen</code>
 * @returns {sap.uxap.ObjectPageLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLayout.prototype.setUseTwoColumnsForLargeScreen = function(bUseTwoColumnsForLargeScreen) { return new sap.uxap.ObjectPageLayout(); };


// ---- sap.uxap.ObjectPageLazyLoader --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageLazyLoader</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
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
 * A helper element that enables a "stashed-based" lazy loading approach for the content of
 * the {@link sap.uxap.ObjectPageSubSection} control.
 * 
 * <code>ObjectPageLazyLoader</code> is intended to be used in a declarative way only
 * (for example, in a view) with the <code>stashed</code> property set to <code>true</code>,
 * and is recommended to be used only once per subsection as its sole content.
 * 
 * <code>ObjectPageLazyLoader</code> utilizes UI5's stashing mechanism and is a lightweight
 * alternative to the native block-based Lazy Loading of the <code>ObjectPageLayout</code>.
 * Wrapping the content of a subsection in an <code>ObjectPageLazyLoader</code> with
 * <code>stashed=true</code> will make the content unstash automatically as the user scrolls.
 * 
 * <b>Note:</b> Subsections are required to have an ID when used with <code>ObjectPageLazyLoader</code>.
 * 
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @constructor
 * @public
 * @since 1.38
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageLazyLoader = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent The content to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageLazyLoader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLazyLoader.prototype.addContent = function(oContent) { return new sap.uxap.ObjectPageLazyLoader(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.uxap.ObjectPageLazyLoader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLazyLoader.prototype.destroyContent = function() { return new sap.uxap.ObjectPageLazyLoader(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageLazyLoader with name <code>sClassName</code>
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
sap.uxap.ObjectPageLazyLoader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Controls to be displayed after this element is unstashed
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLazyLoader.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageLazyLoader.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageLazyLoader.getMetadata = function() { return new sap.ui.base.Metadata(); };

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
sap.uxap.ObjectPageLazyLoader.prototype.indexOfContent = function(oContent) { return 0; };

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
 * @returns {sap.uxap.ObjectPageLazyLoader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLazyLoader.prototype.insertContent = function(oContent,iIndex) { return new sap.uxap.ObjectPageLazyLoader(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLazyLoader.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageLazyLoader.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };


// ---- sap.uxap.ObjectPageSection --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageSection</code>.
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
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li>
 * <li>{@link #getTitleUppercase titleUppercase} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubSections subSections} : sap.uxap.ObjectPageSubSection[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedSubSection selectedSubSection} : (sap.ui.core.ID | sap.uxap.ObjectPageSubSection)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.uxap.ObjectPageSectionBase#constructor sap.uxap.ObjectPageSectionBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Top-level information container of an {@link sap.uxap.ObjectPageLayout}.
 * 
 * The <code>ObjectPageSection</code>'s purpose is to aggregate subsections.
 * 
 * <b>Note:</b> This control is intended to be used only as part of the <code>ObjectPageLayout</code>.
 * 
 * @extends sap.uxap.ObjectPageSectionBase
 * 
 * @constructor
 * @public
 * @since 1.26
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageSection = function(sId,mSettings) {};
/**
 * Adds some subSection to the aggregation {@link #getSubSections subSections}.
 * @param {sap.uxap.ObjectPageSubSection}
 *            oSubSection The subSection to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.addSubSection = function(oSubSection) { return new sap.uxap.ObjectPageSection(); };

/**
 * Destroys all the subSections in the aggregation {@link #getSubSections subSections}.
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.destroySubSections = function() { return new sap.uxap.ObjectPageSection(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageSection with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageSection.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSection.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * ID of the element which is the current target of the association {@link #getSelectedSubSection selectedSubSection}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getSelectedSubSection = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getShowTitle showTitle}.
 * 
 * Determines whether to display the Section title or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTitle</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getShowTitle = function() { return false; };

/**
 * Gets content of aggregation {@link #getSubSections subSections}.
 * 
 * The list of Subsections.
 * 
 * @returns {sap.uxap.ObjectPageSubSection[]}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getSubSections = function() { return new Array(); };

/**
 * Gets current value of property {@link #getTitleUppercase titleUppercase}.
 * 
 * Determines whether the Section title is displayed in upper case.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>titleUppercase</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.getTitleUppercase = function() { return false; };

/**
 * Checks for the provided <code>sap.uxap.ObjectPageSubSection</code> in the aggregation {@link #getSubSections subSections}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.uxap.ObjectPageSubSection}
 *           oSubSection The subSection whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.indexOfSubSection = function(oSubSection) { return 0; };

/**
 * Inserts a subSection into the aggregation {@link #getSubSections subSections}.
 * 
 * @param {sap.uxap.ObjectPageSubSection}
 *            oSubSection The subSection to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the subSection should be inserted at; for
 *              a negative value of <code>iIndex</code>, the subSection is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the subSection is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.insertSubSection = function(oSubSection,iIndex) { return new sap.uxap.ObjectPageSection(); };

/**
 * Removes all the controls from the aggregation {@link #getSubSections subSections}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.uxap.ObjectPageSubSection[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.removeAllSubSections = function() { return new Array(); };

/**
 * Removes a subSection from the aggregation {@link #getSubSections subSections}.
 * 
 * @param {int | string | sap.uxap.ObjectPageSubSection} vSubSection The subSection to remove or its index or id
 * @returns {sap.uxap.ObjectPageSubSection} The removed subSection or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.removeSubSection = function(vSubSection) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Sets the associated {@link #getSelectedSubSection selectedSubSection}.
 * @param {sap.ui.core.ID | sap.uxap.ObjectPageSubSection} oSelectedSubSection ID of an element which becomes the new target of this selectedSubSection association; alternatively, an element instance may be given
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.setSelectedSubSection = function(oSelectedSubSection) { return new sap.uxap.ObjectPageSection(); };

/**
 * Sets a new value for property {@link #getShowTitle showTitle}.
 * 
 * Determines whether to display the Section title or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTitle New value for property <code>showTitle</code>
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.setShowTitle = function(bShowTitle) { return new sap.uxap.ObjectPageSection(); };

/**
 * Sets a new value for property {@link #getTitleUppercase titleUppercase}.
 * 
 * Determines whether the Section title is displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bTitleUppercase New value for property <code>titleUppercase</code>
 * @returns {sap.uxap.ObjectPageSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSection.prototype.setTitleUppercase = function(bTitleUppercase) { return new sap.uxap.ObjectPageSection(); };


// ---- sap.uxap.ObjectPageSectionBase --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageSectionBase</code>.
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
 * <li>{@link #getTitleLevel titleLevel} : sap.ui.core.TitleLevel (default: Auto)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getImportance importance} : sap.uxap.Importance (default: High)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomAnchorBarButton customAnchorBarButton} : sap.m.Button</li>
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
 * An abstract container for sections and subsections in the {@link sap.uxap.ObjectPageLayout}.
 * @extends sap.ui.core.Control
 * @abstract
 * 
 * @constructor
 * @public
 * @since 1.26
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageSectionBase = function(sId,mSettings) {};
/**
 * Explicitly ask to connect to the UI5 model tree
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.connectToModels = function() { return null; };

/**
 * Destroys the customAnchorBarButton in the aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.destroyCustomAnchorBarButton = function() { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name <code>sClassName</code>
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
sap.uxap.ObjectPageSectionBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.
 * 
 * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar.
 * This button will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property changes happening on this button template after the first rendering won't affect the actual button copy used in the anchorBar.
 * 
 * If you want to change some of the button properties, you would need to bind them to a model.
 * 
 * @returns {sap.m.Button}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getCustomAnchorBarButton = function() { return new sap.m.Button(); };

/**
 * Gets current value of property {@link #getImportance importance}.
 * 
 * Determines whether the section will be hidden on low resolutions.
 * 
 * Default value is <code>High</code>.
 * @returns {sap.uxap.Importance} Value of property <code>importance</code>
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getImportance = function() { return new sap.uxap.Importance(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageSectionBase.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSectionBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Section Title
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTitleLevel titleLevel}.
 * 
 * Determines the ARIA level of the <code>ObjectPageSectionBase</code> title.
 * The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
 * 
 * <b>Note:</b> Defining a <code>titleLevel</code> will add <code>aria-level</code> attribute from 1 to 6,
 * instead of changing the <code>ObjectPageSectionBase</code> title HTML tag from H1 to H6.
 * <br>For example: if <code>titleLevel</code> is <code>TitleLevel.H1</code>,
 * it will result as aria-level of 1 added to the <code>ObjectPageSectionBase</code> title.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.ui.core.TitleLevel} Value of property <code>titleLevel</code>
 * @since 1.44.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getTitleLevel = function() { return new sap.ui.core.TitleLevel(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Invisible ObjectPageSectionBase are not rendered
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.getVisible = function() { return false; };

/**
 * Sets the aggregated {@link #getCustomAnchorBarButton customAnchorBarButton}.
 * @param {sap.m.Button} oCustomAnchorBarButton The customAnchorBarButton to set
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setCustomAnchorBarButton = function(oCustomAnchorBarButton) { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * Sets a new value for property {@link #getImportance importance}.
 * 
 * Determines whether the section will be hidden on low resolutions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>High</code>.
 * @param {sap.uxap.Importance} sImportance New value for property <code>importance</code>
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setImportance = function(sImportance) { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Section Title
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setTitle = function(sTitle) { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * Sets a new value for property {@link #getTitleLevel titleLevel}.
 * 
 * Determines the ARIA level of the <code>ObjectPageSectionBase</code> title.
 * The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
 * 
 * <b>Note:</b> Defining a <code>titleLevel</code> will add <code>aria-level</code> attribute from 1 to 6,
 * instead of changing the <code>ObjectPageSectionBase</code> title HTML tag from H1 to H6.
 * <br>For example: if <code>titleLevel</code> is <code>TitleLevel.H1</code>,
 * it will result as aria-level of 1 added to the <code>ObjectPageSectionBase</code> title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.ui.core.TitleLevel} sTitleLevel New value for property <code>titleLevel</code>
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * @since 1.44.0
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setTitleLevel = function(sTitleLevel) { return new sap.uxap.ObjectPageSectionBase(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Invisible ObjectPageSectionBase are not rendered
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.uxap.ObjectPageSectionBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSectionBase.prototype.setVisible = function(bVisible) { return new sap.uxap.ObjectPageSectionBase(); };


// ---- sap.uxap.ObjectPageSubSection --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ObjectPageSubSection</code>.
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
 * <li>{@link #getMode mode} : sap.uxap.ObjectPageSubSectionMode (default: Collapsed)</li>
 * <li>{@link #getTitleUppercase titleUppercase} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBlocks blocks} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getMoreBlocks moreBlocks} : sap.ui.core.Control[]</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.uxap.ObjectPageSectionBase#constructor sap.uxap.ObjectPageSectionBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Second-level information container of an {@link sap.uxap.ObjectPageLayout}.
 * 
 * An <code>ObjectPageSubSection</code> may only be used within sections in the
 * <code>ObjectPageLayout</code>. Subsections are used to display primary information in
 * the <code>blocks</code> aggregation (always visible) and not-so-important information in
 * the <code>moreBlocks</code> aggregation. The content in the <code>moreBlocks</code>
 * aggregation is initially hidden, but may be accessed with a "See more" (...) button.
 * 
 * As of version 1.61, applications can enable auto-expand of the subsections to fit the sections container
 * by adding the <code>sapUxAPObjectPageSubSectionFitContainer</code> class to the subsection. This is useful in
 * situations where the sub-section contains a control that has “100%” height, for example,
 * <code>sap.ui.table.Table</code> with <code>visibleRowCountMode</code> set to <code>Auto</code>.
 * 
 * <b>Note:</b> This control is intended to be used only as part of the <code>ObjectPageLayout</code>.
 * 
 * @extends sap.uxap.ObjectPageSectionBase
 * 
 * @constructor
 * @public
 * @since 1.26
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.uxap.ObjectPageSubSection = function(sId,mSettings) {};
/**
 * Sets DOM ID of the Title borrowed from this SubSection
 * @param {string} sId the ID of the DOM Element
 * @private
 * @ui5-restricted sap.uxap.ObjectPageLayout
 * 
 */
sap.uxap.ObjectPageSubSection.prototype._setBorrowedTitleDomId = function(sId) {  };

/**
 * Adds some action to the aggregation {@link #getActions actions}.
 * @param {sap.ui.core.Control}
 *            oAction The action to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.addAction = function(oAction) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Adds some block to the aggregation {@link #getBlocks blocks}.
 * @param {sap.ui.core.Control}
 *            oBlock The block to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.addBlock = function(oBlock) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Adds some moreBlock to the aggregation {@link #getMoreBlocks moreBlocks}.
 * @param {sap.ui.core.Control}
 *            oMoreBlock The moreBlock to add; if empty, nothing is inserted
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.addMoreBlock = function(oMoreBlock) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Destroys all the actions in the aggregation {@link #getActions actions}.
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.destroyActions = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Destroys all the blocks in the aggregation {@link #getBlocks blocks}.
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.destroyBlocks = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Destroys all the moreBlocks in the aggregation {@link #getMoreBlocks moreBlocks}.
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.destroyMoreBlocks = function() { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Creates a new subclass of class sap.uxap.ObjectPageSubSection with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSubSection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getActions actions}.
 * 
 * Actions available for this subsection.
 * 
 * Although this aggregation accepts type <code>sap.ui.core.Control</code>,
 * it is strongly recommended to use only simple controls, such as buttons, so that
 * the layout of the app is preserved.
 * 
 * <b>Note:</b> Keep in mind that the controls set in the <code>actions</code> aggregation
 * of <code>ObjectPageSubSection</code> do NOT have overflow behavior. If the
 * available space is not enough, the controls will be displayed on more lines.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getBlocks blocks}.
 * 
 * Controls to be displayed in the subsection
 * 
 * <b>Note:</b> The SAP Fiori Design guidelines require that the
 * <code>ObjectPageHeader</code>'s content and the <code>ObjectPage</code>'s subsection content
 * are aligned vertically. When using {@link sap.ui.layout.form.Form},
 * {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} in the subsection
 * content area of <code>ObjectPage</code>, if the content is not already aligned, you need to adjust their left
 * text offset to achieve the vertical alignment.  To do this, apply the
 * <code>sapUxAPObjectPageSubSectionAlignContent</code>
 * CSS class to them and set their <code>width</code> property to <code>auto</code>
 * (if not set by default).
 * 
 * Example:
 * 
 * <pre>
 * <code> &lt;Panel class="sapUxAPObjectPageSubSectionAlignContent" width="auto"&gt;&lt;/Panel&gt; </code>
 * </pre>
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getBlocks = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.uxap.ObjectPageSubSection.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.uxap.ObjectPageSubSection.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMode mode}.
 * 
 * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.
 * 
 * Default value is <code>Collapsed</code>.
 * @returns {sap.uxap.ObjectPageSubSectionMode} Value of property <code>mode</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getMode = function() { return new sap.uxap.ObjectPageSubSectionMode(); };

/**
 * Gets content of aggregation {@link #getMoreBlocks moreBlocks}.
 * 
 * Additional controls to display when the Show more / See all / (...) button is pressed
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getMoreBlocks = function() { return new Array(); };

/**
 * Gets current value of property {@link #getTitleUppercase titleUppercase}.
 * 
 * Determines whether the Subsection title is displayed in upper case.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>titleUppercase</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.getTitleUppercase = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getActions actions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oAction The action whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getBlocks blocks}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oBlock The block whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.indexOfBlock = function(oBlock) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMoreBlocks moreBlocks}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oMoreBlock The moreBlock whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.indexOfMoreBlock = function(oMoreBlock) { return 0; };

/**
 * Inserts a action into the aggregation {@link #getActions actions}.
 * 
 * @param {sap.ui.core.Control}
 *            oAction The action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.insertAction = function(oAction,iIndex) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Adds an <code>sap.uxap.BlockBase</code> instance to the <code>blocks</code> aggregation.
 * 
 * <b>Note:</b> The <code>insertBlock</code> method is not supported by design.
 * If used, it works as an <code>addBlock</code>,
 * adding a single block to the end of the <code>blocks</code> aggregation.
 * @param {sap.uxap.BlockBase} oObject The <code>sap.uxap.BlockBase</code> instance
 * @param {int} iIndex The insertion index
 * @returns {sap.uxap.ObjectPageSubSection} The <code>sap.uxap.ObjectPageSubSection</code> instance
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.insertBlock = function(oObject,iIndex) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Adds an <code>sap.uxap.BlockBase</code> instance to the <code>moreBlocks</code> aggregation.
 * 
 * <b>Note:</b> The <code>insertMoreBlock</code> method is not supported by design.
 * If used, it works as an <code>addMoreBlock</code>,
 * adding a single block to the end of the <code>moreBlocks</code> aggregation.
 * @param {sap.uxap.BlockBase} oObject The <code>sap.uxap.BlockBase</code> instance
 * @param {int} iIndex The insertion index
 * @returns {sap.uxap.ObjectPageSubSection} The <code>sap.uxap.ObjectPageSubSection</code> instance
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.insertMoreBlock = function(oObject,iIndex) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Removes a action from the aggregation {@link #getActions actions}.
 * 
 * @param {int | string | sap.ui.core.Control} vAction The action to remove or its index or id
 * @returns {sap.ui.core.Control} The removed action or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAction = function(vAction) { return new sap.ui.core.Control(); };

/**
 * Removes all the controls from the aggregation {@link #getActions actions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getBlocks blocks}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAllBlocks = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getMoreBlocks moreBlocks}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeAllMoreBlocks = function() { return new Array(); };

/**
 * Removes a block from the aggregation {@link #getBlocks blocks}.
 * 
 * @param {int | string | sap.ui.core.Control} vBlock The block to remove or its index or id
 * @returns {sap.ui.core.Control} The removed block or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeBlock = function(vBlock) { return new sap.ui.core.Control(); };

/**
 * Removes a moreBlock from the aggregation {@link #getMoreBlocks moreBlocks}.
 * 
 * @param {int | string | sap.ui.core.Control} vMoreBlock The moreBlock to remove or its index or id
 * @returns {sap.ui.core.Control} The removed moreBlock or <code>null</code>
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.removeMoreBlock = function(vMoreBlock) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getMode mode}.
 * 
 * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Collapsed</code>.
 * @param {sap.uxap.ObjectPageSubSectionMode} sMode New value for property <code>mode</code>
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.setMode = function(sMode) { return new sap.uxap.ObjectPageSubSection(); };

/**
 * Sets a new value for property {@link #getTitleUppercase titleUppercase}.
 * 
 * Determines whether the Subsection title is displayed in upper case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bTitleUppercase New value for property <code>titleUppercase</code>
 * @returns {sap.uxap.ObjectPageSubSection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.uxap.ObjectPageSubSection.prototype.setTitleUppercase = function(bTitleUppercase) { return new sap.uxap.ObjectPageSubSection(); };


// ---- sap.uxap.ObjectPageSubSectionLayout --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageSubSectionLayout.toString = function() { return ""; };

// ---- sap.uxap.ObjectPageSubSectionMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.uxap.ObjectPageSubSectionMode.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.uxap.BlockBaseFormAdjustment --------------------------------------------------------------------------

/**
 * Any form within the block will be automatically adjusted to have as many columns as the colspan of its parent block.
 * @public
 * 
 */
sap.uxap.BlockBaseFormAdjustment.BlockColumns = "";

/**
 * No automatic adjustment of forms.
 * @public
 * 
 */
sap.uxap.BlockBaseFormAdjustment.None = "";

/**
 * Any form within the block will be automatically adjusted to have only one column.
 * @public
 * 
 */
sap.uxap.BlockBaseFormAdjustment.OneColumn = "";


// ---- sap.uxap.Importance --------------------------------------------------------------------------

/**
 * High importance of the content.
 * @public
 * 
 */
sap.uxap.Importance.High = "";

/**
 * Low importance of the content.
 * @public
 * 
 */
sap.uxap.Importance.Low = "";

/**
 * Medium importance of the content.
 * @public
 * 
 */
sap.uxap.Importance.Medium = "";


// ---- sap.uxap.ObjectPageConfigurationMode --------------------------------------------------------------------------

/**
 * Determines the JSON model.
 * @public
 * 
 */
sap.uxap.ObjectPageConfigurationMode.JsonModel = "";

/**
 * Determines the JSON URL.
 * @public
 * 
 */
sap.uxap.ObjectPageConfigurationMode.JsonURL = "";


// ---- sap.uxap.ObjectPageHeaderDesign --------------------------------------------------------------------------

/**
 * Dark theme for the <code>ObjectPageHeader</code>.
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderDesign.Dark = "";

/**
 * Light theme for the <code>ObjectPageHeader</code>.
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderDesign.Light = "";


// ---- sap.uxap.ObjectPageHeaderPictureShape --------------------------------------------------------------------------

/**
 * Circle shape for the images in the <code>ObjectPageHeader</code>.
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderPictureShape.Circle = "";

/**
 * Square shape for the images in the <code>ObjectPageHeader</code>.
 * @public
 * 
 */
sap.uxap.ObjectPageHeaderPictureShape.Square = "";


// ---- sap.uxap.ObjectPageSubSectionLayout --------------------------------------------------------------------------

/**
 * Title and actions on the left, inside the block area.
 * @public
 * 
 */
sap.uxap.ObjectPageSubSectionLayout.TitleOnLeft = "";

/**
 * Title and actions on top of the block area.
 * @public
 * 
 */
sap.uxap.ObjectPageSubSectionLayout.TitleOnTop = "";


// ---- sap.uxap.ObjectPageSubSectionMode --------------------------------------------------------------------------

/**
 * Collapsed mode of display of the <code>ObjectPageLayout</code>.
 * @public
 * 
 */
sap.uxap.ObjectPageSubSectionMode.Collapsed = "";

/**
 * Expanded mode of displaying the <code>ObjectPageLayout</code>.
 * @public
 * 
 */
sap.uxap.ObjectPageSubSectionMode.Expanded = "";

