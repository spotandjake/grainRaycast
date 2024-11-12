import require$$0, { useState } from 'react';
import { List, Icon, ActionPanel, Action, Detail, showToast, Toast } from '@raycast/api';
import http from 'http';
import https from 'https';
import { URL as URL$1 } from 'url';
import { createHmac } from 'node:crypto';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var util;
(function (util) {
    util.assertEqual = (val) => val;
    function assertIs(_arg) { }
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj) => {
        const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj) => {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
        : (object) => {
            const keys = [];
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = (arr, checker) => {
        for (const item of arr) {
            if (checker(item))
                return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
        : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array
            .map((val) => (typeof val === "string" ? `'${val}'` : val))
            .join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = (first, second) => {
        return {
            ...first,
            ...second, // second overwrites first
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
]);
const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    get errors() {
        return this.issues;
    }
    format(_mapper) {
        const mapper = _mapper ||
            function (issue) {
                return issue.message;
            };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
            for (const issue of error.issues) {
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                }
                else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                }
                else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                }
                else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < issue.path.length) {
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || { _errors: [] };
                            // if (typeof el === "string") {
                            //   curr[el] = curr[el] || { _errors: [] };
                            // } else if (typeof el === "number") {
                            //   const errorArray: any = [];
                            //   errorArray._errors = [];
                            //   curr[el] = curr[el] || errorArray;
                            // }
                        }
                        else {
                            curr[el] = curr[el] || { _errors: [] };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            }
            else {
                formErrors.push(mapper(sub));
            }
        }
        return { formErrors, fieldErrors };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
};

const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                }
                else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                }
                else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                }
                else {
                    util.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            }
            else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${new Date(Number(issue.minimum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
                message = `BigInt must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `smaller than or equal to`
                        : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return { message };
};

let overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...(issueData.path || [])];
    const fullIssue = {
        ...issueData,
        path: fullPath,
    };
    if (issueData.message !== undefined) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message,
        };
    }
    let errorMessage = "";
    const maps = errorMaps
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage,
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === errorMap ? undefined : errorMap, // then global default map
        ].filter((x) => !!x),
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid")
            this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted")
            this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
            if (s.status === "aborted")
                return INVALID;
            if (s.status === "dirty")
                status.dirty();
            arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value,
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
                return INVALID;
            if (value.status === "aborted")
                return INVALID;
            if (key.status === "dirty")
                status.dirty();
            if (value.status === "dirty")
                status.dirty();
            if (key.value !== "__proto__" &&
                (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return { status: status.value, value: finalObject };
    }
}
const INVALID = Object.freeze({
    status: "aborted",
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (state.set(receiver, value)), value;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

var _ZodEnum_cache, _ZodNativeEnum_cache;
class ParseInputLazyPath {
    constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
                this._cachedPath.push(...this._path, ...this._key);
            }
            else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result) => {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error() {
                if (this._error)
                    return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            },
        };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap)
        return { errorMap: errorMap, description };
    const customMap = (iss, ctx) => {
        var _a, _b;
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
            return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
    };
    return { errorMap: customMap, description };
}
class ZodType {
    constructor(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult)
            ? maybeAsyncResult
            : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
                code: ZodIssueCode.custom,
                ...getIssueProperties(val),
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data) => {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement },
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this, this._def);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform },
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def),
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description,
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    // let regex = `\\d{2}:\\d{2}:\\d{2}`;
    let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
    if (args.precision) {
        regex = `${regex}\\.\\d{${args.precision}}`;
    }
    else if (args.precision == null) {
        regex = `${regex}(\\.\\d+)?`;
    }
    return regex;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    status.dirty();
                }
            }
            else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "nanoid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "url") {
                try {
                    new URL(input.data);
                }
                catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "trim") {
                input.data = input.data.trim();
            }
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { includes: check.value, position: check.position },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            }
            else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            }
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { startsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { endsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "date",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "time",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "duration",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...errorUtil.errToObj(message),
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
        var _a, _b;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                local: false,
                message: options,
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    date(message) {
        return this._addCheck({ kind: "date", message });
    }
    time(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "time",
                precision: null,
                message: options,
            });
        }
        return this._addCheck({
            kind: "time",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message),
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message),
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message),
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message),
        });
    }
    /**
     * @deprecated Use z.string().min(1) instead.
     * @see {@link ZodString.min}
     */
    nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params) => {
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message),
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message),
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message),
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message),
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" ||
            (ch.kind === "multipleOf" && util.isInteger(ch.value)));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "finite" ||
                ch.kind === "int" ||
                ch.kind === "multipleOf") {
                return true;
            }
            else if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
            else if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params) => {
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodBigInt extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = BigInt(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.bigint,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params) => {
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime()),
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params) => {
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params),
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params) => {
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params),
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params) => {
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params),
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params) => {
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params),
    });
};
class ZodAny extends ZodType {
    constructor() {
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params) => {
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params),
    });
};
class ZodUnknown extends ZodType {
    constructor() {
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params) => {
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params),
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    }
}
ZodNever.create = (params) => {
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params),
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params) => {
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params),
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: (tooSmall ? def.exactLength.value : undefined),
                    maximum: (tooBig ? def.exactLength.value : undefined),
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message,
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result) => {
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil.toString(message) },
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil.toString(message) },
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil.toString(message) },
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params) => {
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params),
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: () => newShape,
        });
    }
    else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element),
        });
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    }
    else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor() {
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */
        this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return (this._cached = { shape, keys });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever &&
            this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: { status: "valid", value: key },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys) {
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: { status: "valid", value: ctx.data[key] },
                    });
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        }
        else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve()
                .then(async () => {
                const syncPairs = [];
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    syncPairs.push({
                        key,
                        value,
                        alwaysSet: pair.alwaysSet,
                    });
                }
                return syncPairs;
            })
                .then((syncPairs) => {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...(message !== undefined
                ? {
                    errorMap: (issue, ctx) => {
                        var _a, _b, _c, _d;
                        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {}),
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip",
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough",
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...augmentation,
            }),
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...merging._def.shape(),
            }),
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index,
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    /**
     * @deprecated
     */
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            }
            else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            }
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results) {
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results) {
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            })).then(handleResults);
        }
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options) {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx,
                });
                if (result.status === "valid") {
                    return result;
                }
                else if (result.status === "dirty" && !dirty) {
                    dirty = { result, ctx: childCtx };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues) => new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params) => {
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    }
    else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    }
    else if (type instanceof ZodLiteral) {
        return [type.value];
    }
    else if (type instanceof ZodEnum) {
        return type.options;
    }
    else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return util.objectValues(type.enum);
    }
    else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    }
    else if (type instanceof ZodUndefined) {
        return [undefined];
    }
    else if (type instanceof ZodNull) {
        return [null];
    }
    else if (type instanceof ZodOptional) {
        return [undefined, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
    }
    else {
        return [];
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params),
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util
            .objectKeys(a)
            .filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(([left, right]) => handleParsed(left, right));
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    }
}
ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params),
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            status.dirty();
        }
        const items = [...ctx.data]
            .map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
                return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        })
            .filter((x) => !!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results) => {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest,
        });
    }
}
ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params),
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third),
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second),
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async () => {
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            });
        }
        else {
            const finalMap = new Map();
            for (const pair of pairs) {
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
        }
    }
}
ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params),
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements) {
                if (element.status === "aborted")
                    return INVALID;
                if (element.status === "dirty")
                    status.dirty();
                parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements) => finalizeSet(elements));
        }
        else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil.toString(message) },
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil.toString(message) },
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params) => {
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params),
    });
};
class ZodFunction extends ZodType {
    constructor() {
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function (...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args
                    .parseAsync(args, params)
                    .catch((e) => {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type
                    .parseAsync(result, params)
                    .catch((e) => {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        }
        else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function (...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create()),
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType,
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: (args
                ? args
                : ZodTuple.create([]).rest(ZodUnknown.create())),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params),
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
}
ZodLazy.create = (getter, params) => {
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params),
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params),
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params),
    });
}
class ZodEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache)) {
            __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values));
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache).has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef,
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
            ...this._def,
            ...newDef,
        });
    }
}
_ZodEnum_cache = new WeakMap();
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string &&
            ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache)) {
            __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)));
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache).has(input.data)) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
_ZodNativeEnum_cache = new WeakMap();
ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params),
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise &&
            ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    }
}
ZodPromise.create = (schema, params) => {
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params),
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg) => {
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                }
                else {
                    status.dirty();
                }
            },
            get path() {
                return ctx.path;
            },
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
                return Promise.resolve(processed).then(async (processed) => {
                    if (status.value === "aborted")
                        return INVALID;
                    const result = await this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (result.status === "aborted")
                        return INVALID;
                    if (result.status === "dirty")
                        return DIRTY(result.value);
                    if (status.value === "dirty")
                        return DIRTY(result.value);
                    return result;
                });
            }
            else {
                if (status.value === "aborted")
                    return INVALID;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
                if (result.status === "aborted")
                    return INVALID;
                if (result.status === "dirty")
                    return DIRTY(result.value);
                if (status.value === "dirty")
                    return DIRTY(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc) => {
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((inner) => {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement(inner.value).then(() => {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (!isValid(base))
                    return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return { status: status.value, value: result };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((base) => {
                    if (!isValid(base))
                        return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
                });
            }
        }
        util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params),
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params),
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params) => {
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params),
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params) => {
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params),
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params) => {
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function"
            ? params.default
            : () => params.default,
        ...processCreateParams(params),
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: [],
            },
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx,
            },
        });
        if (isAsync(result)) {
            return result.then((result) => {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                            input: newCtx.data,
                        }),
                };
            });
        }
        else {
            return {
                status: "valid",
                value: result.status === "valid"
                    ? result.value
                    : this._def.catchValue({
                        get error() {
                            return new ZodError(newCtx.common.issues);
                        },
                        input: newCtx.data,
                    }),
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params) => {
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params),
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
}
ZodNaN.create = (params) => {
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params),
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async () => {
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                }
                else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            };
            return handleAsync();
        }
        else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
            if (inResult.status === "aborted")
                return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value,
                };
            }
            else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline,
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
            if (isValid(data)) {
                data.value = Object.freeze(data.value);
            }
            return data;
        };
        return isAsync(result)
            ? result.then((data) => freeze(data))
            : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params),
    });
};
function custom(check, params = {}, 
/**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */
fatal) {
    if (check)
        return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            if (!check(data)) {
                const p = typeof params === "function"
                    ? params(data)
                    : typeof params === "string"
                        ? { message: params }
                        : params;
                const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                const p2 = typeof p === "string" ? { message: p } : p;
                ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
            }
        });
    return ZodAny.create();
}
const late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (
// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`,
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true,
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true })),
};
const NEVER = INVALID;

var z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () { return util; },
    get objectUtil () { return objectUtil; },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    datetimeRegex: datetimeRegex,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});

// src/createHttpRequester.ts
var agentOptions = { keepAlive: true };
var defaultHttpAgent = new http.Agent(agentOptions);
var defaultHttpsAgent = new https.Agent(agentOptions);
function createHttpRequester({
  agent: userGlobalAgent,
  httpAgent: userHttpAgent,
  httpsAgent: userHttpsAgent,
  requesterOptions = {}
} = {}) {
  const httpAgent = userHttpAgent || userGlobalAgent || defaultHttpAgent;
  const httpsAgent = userHttpsAgent || userGlobalAgent || defaultHttpsAgent;
  function send(request) {
    return new Promise((resolve) => {
      let responseTimeout;
      let connectTimeout;
      const url = new URL$1(request.url);
      const path = url.search === null ? url.pathname : `${url.pathname}${url.search}`;
      const options = {
        agent: url.protocol === "https:" ? httpsAgent : httpAgent,
        hostname: url.hostname,
        path,
        method: request.method,
        ...requesterOptions,
        headers: {
          ...request.headers,
          ...requesterOptions.headers
        }
      };
      if (url.port && !requesterOptions.port) {
        options.port = url.port;
      }
      const req = (url.protocol === "https:" ? https : http).request(options, (response) => {
        let contentBuffers = [];
        response.on("data", (chunk) => {
          contentBuffers = contentBuffers.concat(chunk);
        });
        response.on("end", () => {
          clearTimeout(connectTimeout);
          clearTimeout(responseTimeout);
          resolve({
            status: response.statusCode || 0,
            content: Buffer.concat(contentBuffers).toString(),
            isTimedOut: false
          });
        });
      });
      const createTimeout = (timeout, content) => {
        return setTimeout(() => {
          req.destroy();
          resolve({
            status: 0,
            content,
            isTimedOut: true
          });
        }, timeout);
      };
      connectTimeout = createTimeout(request.connectTimeout, "Connection timeout");
      req.on("error", (error) => {
        clearTimeout(connectTimeout);
        clearTimeout(responseTimeout);
        resolve({ status: 0, content: error.message, isTimedOut: false });
      });
      req.once("response", () => {
        clearTimeout(connectTimeout);
        responseTimeout = createTimeout(request.responseTimeout, "Socket timeout");
      });
      if (request.data !== void 0) {
        req.write(request.data);
      }
      req.end();
    });
  }
  return { send };
}

// src/cache/createBrowserLocalStorageCache.ts

// src/cache/createNullCache.ts
function createNullCache() {
  return {
    get(_key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const value = defaultValue();
      return value.then((result) => Promise.all([result, events.miss(result)])).then(([result]) => result);
    },
    set(_key, value) {
      return Promise.resolve(value);
    },
    delete(_key) {
      return Promise.resolve();
    },
    clear() {
      return Promise.resolve();
    }
  };
}

// src/cache/createMemoryCache.ts
function createMemoryCache(options = { serializable: true }) {
  let cache = {};
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const keyAsString = JSON.stringify(key);
      if (keyAsString in cache) {
        return Promise.resolve(options.serializable ? JSON.parse(cache[keyAsString]) : cache[keyAsString]);
      }
      const promise = defaultValue();
      return promise.then((value) => events.miss(value)).then(() => promise);
    },
    set(key, value) {
      cache[JSON.stringify(key)] = options.serializable ? JSON.stringify(value) : value;
      return Promise.resolve(value);
    },
    delete(key) {
      delete cache[JSON.stringify(key)];
      return Promise.resolve();
    },
    clear() {
      cache = {};
      return Promise.resolve();
    }
  };
}
var DEFAULT_CONNECT_TIMEOUT_NODE = 2e3;
var DEFAULT_READ_TIMEOUT_NODE = 5e3;
var DEFAULT_WRITE_TIMEOUT_NODE = 3e4;

// src/createAlgoliaAgent.ts
function createAlgoliaAgent(version) {
  const algoliaAgent = {
    value: `Algolia for JavaScript (${version})`,
    add(options) {
      const addedAlgoliaAgent = `; ${options.segment}${options.version !== void 0 ? ` (${options.version})` : ""}`;
      if (algoliaAgent.value.indexOf(addedAlgoliaAgent) === -1) {
        algoliaAgent.value = `${algoliaAgent.value}${addedAlgoliaAgent}`;
      }
      return algoliaAgent;
    }
  };
  return algoliaAgent;
}

// src/createAuth.ts
function createAuth(appId, apiKey, authMode = "WithinHeaders") {
  const credentials = {
    "x-algolia-api-key": apiKey,
    "x-algolia-application-id": appId
  };
  return {
    headers() {
      return authMode === "WithinHeaders" ? credentials : {};
    },
    queryParameters() {
      return authMode === "WithinQueryParameters" ? credentials : {};
    }
  };
}

// src/createIterablePromise.ts
function createIterablePromise({
  func,
  validate,
  aggregator,
  error,
  timeout = () => 0
}) {
  const retry = (previousResponse) => {
    return new Promise((resolve, reject) => {
      func(previousResponse).then((response) => {
        if (aggregator) {
          aggregator(response);
        }
        if (validate(response)) {
          return resolve(response);
        }
        if (error && error.validate(response)) {
          return reject(new Error(error.message(response)));
        }
        return setTimeout(() => {
          retry(response).then(resolve).catch(reject);
        }, timeout());
      }).catch((err) => {
        reject(err);
      });
    });
  };
  return retry();
}

// src/getAlgoliaAgent.ts
function getAlgoliaAgent({ algoliaAgents, client, version }) {
  const defaultAlgoliaAgent = createAlgoliaAgent(version).add({
    segment: client,
    version
  });
  algoliaAgents.forEach((algoliaAgent) => defaultAlgoliaAgent.add(algoliaAgent));
  return defaultAlgoliaAgent;
}

// src/logger/createNullLogger.ts
function createNullLogger() {
  return {
    debug(_message, _args) {
      return Promise.resolve();
    },
    info(_message, _args) {
      return Promise.resolve();
    },
    error(_message, _args) {
      return Promise.resolve();
    }
  };
}

// src/transporter/createStatefulHost.ts
var EXPIRATION_DELAY = 2 * 60 * 1e3;
function createStatefulHost(host, status = "up") {
  const lastUpdate = Date.now();
  function isUp() {
    return status === "up" || Date.now() - lastUpdate > EXPIRATION_DELAY;
  }
  function isTimedOut() {
    return status === "timed out" && Date.now() - lastUpdate <= EXPIRATION_DELAY;
  }
  return { ...host, status, lastUpdate, isUp, isTimedOut };
}

// src/transporter/errors.ts
var AlgoliaError = class extends Error {
  name = "AlgoliaError";
  constructor(message, name) {
    super(message);
    if (name) {
      this.name = name;
    }
  }
};
var ErrorWithStackTrace = class extends AlgoliaError {
  stackTrace;
  constructor(message, stackTrace, name) {
    super(message, name);
    this.stackTrace = stackTrace;
  }
};
var RetryError = class extends ErrorWithStackTrace {
  constructor(stackTrace) {
    super(
      "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.",
      stackTrace,
      "RetryError"
    );
  }
};
var ApiError = class extends ErrorWithStackTrace {
  status;
  constructor(message, status, stackTrace, name = "ApiError") {
    super(message, stackTrace, name);
    this.status = status;
  }
};
var DeserializationError = class extends AlgoliaError {
  response;
  constructor(message, response) {
    super(message, "DeserializationError");
    this.response = response;
  }
};
var DetailedApiError = class extends ApiError {
  error;
  constructor(message, status, error, stackTrace) {
    super(message, status, stackTrace, "DetailedApiError");
    this.error = error;
  }
};

// src/transporter/helpers.ts
function shuffle(array) {
  const shuffledArray = array;
  for (let c = array.length - 1; c > 0; c--) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = array[c];
    shuffledArray[c] = array[b];
    shuffledArray[b] = a;
  }
  return shuffledArray;
}
function serializeUrl(host, path, queryParameters) {
  const queryParametersAsString = serializeQueryParameters(queryParameters);
  let url = `${host.protocol}://${host.url}${host.port ? `:${host.port}` : ""}/${path.charAt(0) === "/" ? path.substring(1) : path}`;
  if (queryParametersAsString.length) {
    url += `?${queryParametersAsString}`;
  }
  return url;
}
function serializeQueryParameters(parameters) {
  return Object.keys(parameters).filter((key) => parameters[key] !== void 0).sort().map(
    (key) => `${key}=${encodeURIComponent(
      Object.prototype.toString.call(parameters[key]) === "[object Array]" ? parameters[key].join(",") : parameters[key]
    ).replace(/\+/g, "%20")}`
  ).join("&");
}
function serializeData(request, requestOptions) {
  if (request.method === "GET" || request.data === void 0 && requestOptions.data === void 0) {
    return void 0;
  }
  const data = Array.isArray(request.data) ? request.data : { ...request.data, ...requestOptions.data };
  return JSON.stringify(data);
}
function serializeHeaders(baseHeaders, requestHeaders, requestOptionsHeaders) {
  const headers = {
    Accept: "application/json",
    ...baseHeaders,
    ...requestHeaders,
    ...requestOptionsHeaders
  };
  const serializedHeaders = {};
  Object.keys(headers).forEach((header) => {
    const value = headers[header];
    serializedHeaders[header.toLowerCase()] = value;
  });
  return serializedHeaders;
}
function deserializeSuccess(response) {
  try {
    return JSON.parse(response.content);
  } catch (e) {
    throw new DeserializationError(e.message, response);
  }
}
function deserializeFailure({ content, status }, stackFrame) {
  try {
    const parsed = JSON.parse(content);
    if ("error" in parsed) {
      return new DetailedApiError(parsed.message, status, parsed.error, stackFrame);
    }
    return new ApiError(parsed.message, status, stackFrame);
  } catch {
  }
  return new ApiError(content, status, stackFrame);
}

// src/transporter/responses.ts
function isNetworkError({ isTimedOut, status }) {
  return !isTimedOut && ~~status === 0;
}
function isRetryable({ isTimedOut, status }) {
  return isTimedOut || isNetworkError({ isTimedOut, status }) || ~~(status / 100) !== 2 && ~~(status / 100) !== 4;
}
function isSuccess({ status }) {
  return ~~(status / 100) === 2;
}

// src/transporter/stackTrace.ts
function stackTraceWithoutCredentials(stackTrace) {
  return stackTrace.map((stackFrame) => stackFrameWithoutCredentials(stackFrame));
}
function stackFrameWithoutCredentials(stackFrame) {
  const modifiedHeaders = stackFrame.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return {
    ...stackFrame,
    request: {
      ...stackFrame.request,
      headers: {
        ...stackFrame.request.headers,
        ...modifiedHeaders
      }
    }
  };
}

// src/transporter/createTransporter.ts
function createTransporter({
  hosts,
  hostsCache,
  baseHeaders,
  logger,
  baseQueryParameters,
  algoliaAgent,
  timeouts,
  requester,
  requestsCache,
  responsesCache
}) {
  async function createRetryableOptions(compatibleHosts) {
    const statefulHosts = await Promise.all(
      compatibleHosts.map((compatibleHost) => {
        return hostsCache.get(compatibleHost, () => {
          return Promise.resolve(createStatefulHost(compatibleHost));
        });
      })
    );
    const hostsUp = statefulHosts.filter((host) => host.isUp());
    const hostsTimedOut = statefulHosts.filter((host) => host.isTimedOut());
    const hostsAvailable = [...hostsUp, ...hostsTimedOut];
    const compatibleHostsAvailable = hostsAvailable.length > 0 ? hostsAvailable : compatibleHosts;
    return {
      hosts: compatibleHostsAvailable,
      getTimeout(timeoutsCount, baseTimeout) {
        const timeoutMultiplier = hostsTimedOut.length === 0 && timeoutsCount === 0 ? 1 : hostsTimedOut.length + 3 + timeoutsCount;
        return timeoutMultiplier * baseTimeout;
      }
    };
  }
  async function retryableRequest(request, requestOptions, isRead = true) {
    const stackTrace = [];
    const data = serializeData(request, requestOptions);
    const headers = serializeHeaders(baseHeaders, request.headers, requestOptions.headers);
    const dataQueryParameters = request.method === "GET" ? {
      ...request.data,
      ...requestOptions.data
    } : {};
    const queryParameters = {
      ...baseQueryParameters,
      ...request.queryParameters,
      ...dataQueryParameters
    };
    if (algoliaAgent.value) {
      queryParameters["x-algolia-agent"] = algoliaAgent.value;
    }
    if (requestOptions && requestOptions.queryParameters) {
      for (const key of Object.keys(requestOptions.queryParameters)) {
        if (!requestOptions.queryParameters[key] || Object.prototype.toString.call(requestOptions.queryParameters[key]) === "[object Object]") {
          queryParameters[key] = requestOptions.queryParameters[key];
        } else {
          queryParameters[key] = requestOptions.queryParameters[key].toString();
        }
      }
    }
    let timeoutsCount = 0;
    const retry = async (retryableHosts, getTimeout) => {
      const host = retryableHosts.pop();
      if (host === void 0) {
        throw new RetryError(stackTraceWithoutCredentials(stackTrace));
      }
      const timeout = { ...timeouts, ...requestOptions.timeouts };
      const payload = {
        data,
        headers,
        method: request.method,
        url: serializeUrl(host, request.path, queryParameters),
        connectTimeout: getTimeout(timeoutsCount, timeout.connect),
        responseTimeout: getTimeout(timeoutsCount, isRead ? timeout.read : timeout.write)
      };
      const pushToStackTrace = (response2) => {
        const stackFrame = {
          request: payload,
          response: response2,
          host,
          triesLeft: retryableHosts.length
        };
        stackTrace.push(stackFrame);
        return stackFrame;
      };
      const response = await requester.send(payload);
      if (isRetryable(response)) {
        const stackFrame = pushToStackTrace(response);
        if (response.isTimedOut) {
          timeoutsCount++;
        }
        logger.info("Retryable failure", stackFrameWithoutCredentials(stackFrame));
        await hostsCache.set(host, createStatefulHost(host, response.isTimedOut ? "timed out" : "down"));
        return retry(retryableHosts, getTimeout);
      }
      if (isSuccess(response)) {
        return deserializeSuccess(response);
      }
      pushToStackTrace(response);
      throw deserializeFailure(response, stackTrace);
    };
    const compatibleHosts = hosts.filter(
      (host) => host.accept === "readWrite" || (isRead ? host.accept === "read" : host.accept === "write")
    );
    const options = await createRetryableOptions(compatibleHosts);
    return retry([...options.hosts].reverse(), options.getTimeout);
  }
  function createRequest(request, requestOptions = {}) {
    const isRead = request.useReadTransporter || request.method === "GET";
    if (!isRead) {
      return retryableRequest(request, requestOptions, isRead);
    }
    const createRetryableRequest = () => {
      return retryableRequest(request, requestOptions);
    };
    const cacheable = requestOptions.cacheable || request.cacheable;
    if (cacheable !== true) {
      return createRetryableRequest();
    }
    const key = {
      request,
      requestOptions,
      transporter: {
        queryParameters: baseQueryParameters,
        headers: baseHeaders
      }
    };
    return responsesCache.get(
      key,
      () => {
        return requestsCache.get(
          key,
          () => (
            /**
             * Finally, if there is no request in progress with the same key,
             * this `createRetryableRequest()` will actually trigger the
             * retryable request.
             */
            requestsCache.set(key, createRetryableRequest()).then(
              (response) => Promise.all([requestsCache.delete(key), response]),
              (err) => Promise.all([requestsCache.delete(key), Promise.reject(err)])
            ).then(([_, response]) => response)
          )
        );
      },
      {
        /**
         * Of course, once we get this response back from the server, we
         * tell response cache to actually store the received response
         * to be used later.
         */
        miss: (response) => responsesCache.set(key, response)
      }
    );
  }
  return {
    hostsCache,
    requester,
    timeouts,
    logger,
    algoliaAgent,
    baseHeaders,
    baseQueryParameters,
    hosts,
    request: createRequest,
    requestsCache,
    responsesCache
  };
}

// builds/node.ts
var apiClientVersion$8 = "5.13.0";
var REGIONS$5 = ["de", "us"];
function getDefaultHosts$8(region) {
  const url = !region ? "analytics.algolia.com" : "analytics.{region}.algolia.com".replace("{region}", region);
  return [{ url, accept: "readWrite", protocol: "https" }];
}
function createAbtestingClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  region: regionOption,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts$8(regionOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Abtesting",
      version: apiClientVersion$8
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * Creates a new A/B test.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param addABTestsRequest - The addABTestsRequest object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    addABTests(addABTestsRequest, requestOptions) {
      if (!addABTestsRequest) {
        throw new Error("Parameter `addABTestsRequest` is required when calling `addABTests`.");
      }
      if (!addABTestsRequest.name) {
        throw new Error("Parameter `addABTestsRequest.name` is required when calling `addABTests`.");
      }
      if (!addABTestsRequest.variants) {
        throw new Error("Parameter `addABTestsRequest.variants` is required when calling `addABTests`.");
      }
      if (!addABTestsRequest.endAt) {
        throw new Error("Parameter `addABTestsRequest.endAt` is required when calling `addABTests`.");
      }
      const requestPath = "/2/abtests";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: addABTestsRequest
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customDelete`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customGet`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPut`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes an A/B test by its ID.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param deleteABTest - The deleteABTest object.
     * @param deleteABTest.id - Unique A/B test identifier.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteABTest({ id }, requestOptions) {
      if (!id) {
        throw new Error("Parameter `id` is required when calling `deleteABTest`.");
      }
      const requestPath = "/2/abtests/{id}".replace("{id}", encodeURIComponent(id));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the details for an A/B test by its ID.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getABTest - The getABTest object.
     * @param getABTest.id - Unique A/B test identifier.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getABTest({ id }, requestOptions) {
      if (!id) {
        throw new Error("Parameter `id` is required when calling `getABTest`.");
      }
      const requestPath = "/2/abtests/{id}".replace("{id}", encodeURIComponent(id));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Lists all A/B tests you configured for this application.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param listABTests - The listABTests object.
     * @param listABTests.offset - Position of the first item to return.
     * @param listABTests.limit - Number of items to return.
     * @param listABTests.indexPrefix - Index name prefix. Only A/B tests for indices starting with this string are included in the response.
     * @param listABTests.indexSuffix - Index name suffix. Only A/B tests for indices ending with this string are included in the response.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listABTests({ offset, limit, indexPrefix, indexSuffix } = {}, requestOptions = void 0) {
      const requestPath = "/2/abtests";
      const headers = {};
      const queryParameters = {};
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (limit !== void 0) {
        queryParameters["limit"] = limit.toString();
      }
      if (indexPrefix !== void 0) {
        queryParameters["indexPrefix"] = indexPrefix.toString();
      }
      if (indexSuffix !== void 0) {
        queryParameters["indexSuffix"] = indexSuffix.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Schedule an A/B test to be started at a later time.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param scheduleABTestsRequest - The scheduleABTestsRequest object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    scheduleABTest(scheduleABTestsRequest, requestOptions) {
      if (!scheduleABTestsRequest) {
        throw new Error("Parameter `scheduleABTestsRequest` is required when calling `scheduleABTest`.");
      }
      if (!scheduleABTestsRequest.name) {
        throw new Error("Parameter `scheduleABTestsRequest.name` is required when calling `scheduleABTest`.");
      }
      if (!scheduleABTestsRequest.variants) {
        throw new Error("Parameter `scheduleABTestsRequest.variants` is required when calling `scheduleABTest`.");
      }
      if (!scheduleABTestsRequest.scheduledAt) {
        throw new Error("Parameter `scheduleABTestsRequest.scheduledAt` is required when calling `scheduleABTest`.");
      }
      if (!scheduleABTestsRequest.endAt) {
        throw new Error("Parameter `scheduleABTestsRequest.endAt` is required when calling `scheduleABTest`.");
      }
      const requestPath = "/2/abtests/schedule";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: scheduleABTestsRequest
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Stops an A/B test by its ID.  You can\'t restart stopped A/B tests.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param stopABTest - The stopABTest object.
     * @param stopABTest.id - Unique A/B test identifier.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    stopABTest({ id }, requestOptions) {
      if (!id) {
        throw new Error("Parameter `id` is required when calling `stopABTest`.");
      }
      const requestPath = "/2/abtests/{id}/stop".replace("{id}", encodeURIComponent(id));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    }
  };
}

// builds/node.ts
function abtestingClient(appId, apiKey, region, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  if (region && (typeof region !== "string" || !REGIONS$5.includes(region))) {
    throw new Error(`\`region\` must be one of the following: ${REGIONS$5.join(", ")}`);
  }
  return {
    ...createAbtestingClient({
      appId,
      apiKey,
      region,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: "Node.js", version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options
    })
  };
}

var client_abtesting_star = /*#__PURE__*/Object.freeze({
  __proto__: null,
  abtestingClient: abtestingClient,
  apiClientVersion: apiClientVersion$8
});

// builds/node.ts
var apiClientVersion$7 = "5.13.0";
var REGIONS$4 = ["de", "us"];
function getDefaultHosts$7(region) {
  const url = !region ? "analytics.algolia.com" : "analytics.{region}.algolia.com".replace("{region}", region);
  return [{ url, accept: "readWrite", protocol: "https" }];
}
function createAnalyticsClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  region: regionOption,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts$7(regionOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Analytics",
      version: apiClientVersion$7
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customDelete`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customGet`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPut`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the add-to-cart rate for all of your searches with at least one add-to-cart event, including a daily breakdown.  By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getAddToCartRate - The getAddToCartRate object.
     * @param getAddToCartRate.index - Index name.
     * @param getAddToCartRate.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getAddToCartRate.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getAddToCartRate.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getAddToCartRate({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getAddToCartRate`.");
      }
      const requestPath = "/2/conversions/addToCartRate";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the average click position of your search results, including a daily breakdown.  The average click position is the average of all clicked search results\' positions. For example, if users only ever click on the first result for any search, the average click position is 1. By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getAverageClickPosition - The getAverageClickPosition object.
     * @param getAverageClickPosition.index - Index name.
     * @param getAverageClickPosition.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getAverageClickPosition.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getAverageClickPosition.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getAverageClickPosition({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getAverageClickPosition`.");
      }
      const requestPath = "/2/clicks/averageClickPosition";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the positions in the search results and their associated number of clicks.  This lets you check how many clicks the first, second, or tenth search results receive.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getClickPositions - The getClickPositions object.
     * @param getClickPositions.index - Index name.
     * @param getClickPositions.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getClickPositions.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getClickPositions.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getClickPositions({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getClickPositions`.");
      }
      const requestPath = "/2/clicks/positions";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the click-through rate for all of your searches with at least one click event, including a daily breakdown  By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getClickThroughRate - The getClickThroughRate object.
     * @param getClickThroughRate.index - Index name.
     * @param getClickThroughRate.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getClickThroughRate.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getClickThroughRate.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getClickThroughRate({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getClickThroughRate`.");
      }
      const requestPath = "/2/clicks/clickThroughRate";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the conversion rate for all of your searches with at least one conversion event, including a daily breakdown.  By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getConversionRate - The getConversionRate object.
     * @param getConversionRate.index - Index name.
     * @param getConversionRate.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getConversionRate.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getConversionRate.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getConversionRate({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getConversionRate`.");
      }
      const requestPath = "/2/conversions/conversionRate";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the fraction of searches that didn\'t lead to any click within a time range, including a daily breakdown.  By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getNoClickRate - The getNoClickRate object.
     * @param getNoClickRate.index - Index name.
     * @param getNoClickRate.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getNoClickRate.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getNoClickRate.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getNoClickRate({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getNoClickRate`.");
      }
      const requestPath = "/2/searches/noClickRate";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the fraction of searches that didn\'t return any results within a time range, including a daily breakdown.  By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getNoResultsRate - The getNoResultsRate object.
     * @param getNoResultsRate.index - Index name.
     * @param getNoResultsRate.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getNoResultsRate.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getNoResultsRate.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getNoResultsRate({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getNoResultsRate`.");
      }
      const requestPath = "/2/searches/noResultRate";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the purchase rate for all of your searches with at least one purchase event, including a daily breakdown.  By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getPurchaseRate - The getPurchaseRate object.
     * @param getPurchaseRate.index - Index name.
     * @param getPurchaseRate.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getPurchaseRate.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getPurchaseRate.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getPurchaseRate({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getPurchaseRate`.");
      }
      const requestPath = "/2/conversions/purchaseRate";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves revenue-related metrics, such as the total revenue or the average order value.  To retrieve revenue-related metrics, sent purchase events. By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getRevenue - The getRevenue object.
     * @param getRevenue.index - Index name.
     * @param getRevenue.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getRevenue.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getRevenue.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRevenue({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getRevenue`.");
      }
      const requestPath = "/2/conversions/revenue";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the number of searches within a time range, including a daily breakdown.  By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getSearchesCount - The getSearchesCount object.
     * @param getSearchesCount.index - Index name.
     * @param getSearchesCount.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getSearchesCount.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getSearchesCount.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getSearchesCount({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getSearchesCount`.");
      }
      const requestPath = "/2/searches/count";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the most popular searches that didn\'t lead to any clicks, from the 1,000 most frequent searches.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getSearchesNoClicks - The getSearchesNoClicks object.
     * @param getSearchesNoClicks.index - Index name.
     * @param getSearchesNoClicks.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getSearchesNoClicks.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getSearchesNoClicks.limit - Number of items to return.
     * @param getSearchesNoClicks.offset - Position of the first item to return.
     * @param getSearchesNoClicks.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getSearchesNoClicks({ index, startDate, endDate, limit, offset, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getSearchesNoClicks`.");
      }
      const requestPath = "/2/searches/noClicks";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (limit !== void 0) {
        queryParameters["limit"] = limit.toString();
      }
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the most popular searches that didn\'t return any results.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getSearchesNoResults - The getSearchesNoResults object.
     * @param getSearchesNoResults.index - Index name.
     * @param getSearchesNoResults.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getSearchesNoResults.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getSearchesNoResults.limit - Number of items to return.
     * @param getSearchesNoResults.offset - Position of the first item to return.
     * @param getSearchesNoResults.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getSearchesNoResults({ index, startDate, endDate, limit, offset, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getSearchesNoResults`.");
      }
      const requestPath = "/2/searches/noResults";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (limit !== void 0) {
        queryParameters["limit"] = limit.toString();
      }
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the time when the Analytics data for the specified index was last updated.  The Analytics data is updated every 5 minutes.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getStatus - The getStatus object.
     * @param getStatus.index - Index name.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getStatus({ index }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getStatus`.");
      }
      const requestPath = "/2/status";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the countries with the most searches to your index.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getTopCountries - The getTopCountries object.
     * @param getTopCountries.index - Index name.
     * @param getTopCountries.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopCountries.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopCountries.limit - Number of items to return.
     * @param getTopCountries.offset - Position of the first item to return.
     * @param getTopCountries.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTopCountries({ index, startDate, endDate, limit, offset, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getTopCountries`.");
      }
      const requestPath = "/2/countries";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (limit !== void 0) {
        queryParameters["limit"] = limit.toString();
      }
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the most frequently used filter attributes.  These are attributes of your records that you included in the `attributesForFaceting` setting.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getTopFilterAttributes - The getTopFilterAttributes object.
     * @param getTopFilterAttributes.index - Index name.
     * @param getTopFilterAttributes.search - Search query.
     * @param getTopFilterAttributes.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopFilterAttributes.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopFilterAttributes.limit - Number of items to return.
     * @param getTopFilterAttributes.offset - Position of the first item to return.
     * @param getTopFilterAttributes.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTopFilterAttributes({ index, search, startDate, endDate, limit, offset, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getTopFilterAttributes`.");
      }
      const requestPath = "/2/filters";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (search !== void 0) {
        queryParameters["search"] = search.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (limit !== void 0) {
        queryParameters["limit"] = limit.toString();
      }
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the most frequent filter (facet) values for a filter attribute.  These are attributes of your records that you included in the `attributesForFaceting` setting.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getTopFilterForAttribute - The getTopFilterForAttribute object.
     * @param getTopFilterForAttribute.attribute - Attribute name.
     * @param getTopFilterForAttribute.index - Index name.
     * @param getTopFilterForAttribute.search - Search query.
     * @param getTopFilterForAttribute.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopFilterForAttribute.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopFilterForAttribute.limit - Number of items to return.
     * @param getTopFilterForAttribute.offset - Position of the first item to return.
     * @param getTopFilterForAttribute.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTopFilterForAttribute({ attribute, index, search, startDate, endDate, limit, offset, tags }, requestOptions) {
      if (!attribute) {
        throw new Error("Parameter `attribute` is required when calling `getTopFilterForAttribute`.");
      }
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getTopFilterForAttribute`.");
      }
      const requestPath = "/2/filters/{attribute}".replace("{attribute}", encodeURIComponent(attribute));
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (search !== void 0) {
        queryParameters["search"] = search.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (limit !== void 0) {
        queryParameters["limit"] = limit.toString();
      }
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the most frequently used filters for a search that didn\'t return any results.  To get the most frequent searches without results, use the [Retrieve searches without results](#tag/search/operation/getSearchesNoResults) operation.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getTopFiltersNoResults - The getTopFiltersNoResults object.
     * @param getTopFiltersNoResults.index - Index name.
     * @param getTopFiltersNoResults.search - Search query.
     * @param getTopFiltersNoResults.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopFiltersNoResults.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopFiltersNoResults.limit - Number of items to return.
     * @param getTopFiltersNoResults.offset - Position of the first item to return.
     * @param getTopFiltersNoResults.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTopFiltersNoResults({ index, search, startDate, endDate, limit, offset, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getTopFiltersNoResults`.");
      }
      const requestPath = "/2/filters/noResults";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (search !== void 0) {
        queryParameters["search"] = search.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (limit !== void 0) {
        queryParameters["limit"] = limit.toString();
      }
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the object IDs of the most frequent search results.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getTopHits - The getTopHits object.
     * @param getTopHits.index - Index name.
     * @param getTopHits.search - Search query.
     * @param getTopHits.clickAnalytics - Whether to include metrics related to click and conversion events in the response.
     * @param getTopHits.revenueAnalytics - Whether to include revenue-related metrics in the response.  If true, metrics related to click and conversion events are also included in the response.
     * @param getTopHits.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopHits.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopHits.limit - Number of items to return.
     * @param getTopHits.offset - Position of the first item to return.
     * @param getTopHits.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTopHits({ index, search, clickAnalytics, revenueAnalytics, startDate, endDate, limit, offset, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getTopHits`.");
      }
      const requestPath = "/2/hits";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (search !== void 0) {
        queryParameters["search"] = search.toString();
      }
      if (clickAnalytics !== void 0) {
        queryParameters["clickAnalytics"] = clickAnalytics.toString();
      }
      if (revenueAnalytics !== void 0) {
        queryParameters["revenueAnalytics"] = revenueAnalytics.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (limit !== void 0) {
        queryParameters["limit"] = limit.toString();
      }
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Returns the most popular search terms.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getTopSearches - The getTopSearches object.
     * @param getTopSearches.index - Index name.
     * @param getTopSearches.clickAnalytics - Whether to include metrics related to click and conversion events in the response.
     * @param getTopSearches.revenueAnalytics - Whether to include revenue-related metrics in the response.  If true, metrics related to click and conversion events are also included in the response.
     * @param getTopSearches.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopSearches.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getTopSearches.orderBy - Attribute by which to order the response items.  If the `clickAnalytics` parameter is false, only `searchCount` is available.
     * @param getTopSearches.direction - Sorting direction of the results: ascending or descending.
     * @param getTopSearches.limit - Number of items to return.
     * @param getTopSearches.offset - Position of the first item to return.
     * @param getTopSearches.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTopSearches({
      index,
      clickAnalytics,
      revenueAnalytics,
      startDate,
      endDate,
      orderBy,
      direction,
      limit,
      offset,
      tags
    }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getTopSearches`.");
      }
      const requestPath = "/2/searches";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (clickAnalytics !== void 0) {
        queryParameters["clickAnalytics"] = clickAnalytics.toString();
      }
      if (revenueAnalytics !== void 0) {
        queryParameters["revenueAnalytics"] = revenueAnalytics.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (orderBy !== void 0) {
        queryParameters["orderBy"] = orderBy.toString();
      }
      if (direction !== void 0) {
        queryParameters["direction"] = direction.toString();
      }
      if (limit !== void 0) {
        queryParameters["limit"] = limit.toString();
      }
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the number of unique users within a time range, including a daily breakdown.  Since this endpoint returns the number of unique users, the sum of the daily values might be different from the total number.  By default, Algolia distinguishes search users by their IP address, _unless_ you include a pseudonymous user identifier in your search requests with the `userToken` API parameter or `x-algolia-usertoken` request header. By default, the analyzed period includes the last eight days including the current day.
     *
     * Required API Key ACLs:
     *  - analytics
     * @param getUsersCount - The getUsersCount object.
     * @param getUsersCount.index - Index name.
     * @param getUsersCount.startDate - Start date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getUsersCount.endDate - End date of the period to analyze, in `YYYY-MM-DD` format.
     * @param getUsersCount.tags - Tags by which to segment the analytics.  You can combine multiple tags with `OR` and `AND`. Tags must be URL-encoded. For more information, see [Segment your analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getUsersCount({ index, startDate, endDate, tags }, requestOptions) {
      if (!index) {
        throw new Error("Parameter `index` is required when calling `getUsersCount`.");
      }
      const requestPath = "/2/users/count";
      const headers = {};
      const queryParameters = {};
      if (index !== void 0) {
        queryParameters["index"] = index.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      if (tags !== void 0) {
        queryParameters["tags"] = tags.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    }
  };
}

// builds/node.ts
function analyticsClient(appId, apiKey, region, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  if (region && (typeof region !== "string" || !REGIONS$4.includes(region))) {
    throw new Error(`\`region\` must be one of the following: ${REGIONS$4.join(", ")}`);
  }
  return {
    ...createAnalyticsClient({
      appId,
      apiKey,
      region,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: "Node.js", version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options
    })
  };
}

var client_analytics_star = /*#__PURE__*/Object.freeze({
  __proto__: null,
  analyticsClient: analyticsClient,
  apiClientVersion: apiClientVersion$7
});

// builds/node.ts
var apiClientVersion$6 = "5.13.0";
var REGIONS$3 = ["de", "us"];
function getDefaultHosts$6(region) {
  const url = !region ? "insights.algolia.io" : "insights.{region}.algolia.io".replace("{region}", region);
  return [{ url, accept: "readWrite", protocol: "https" }];
}
function createInsightsClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  region: regionOption,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts$6(regionOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Insights",
      version: apiClientVersion$6
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customDelete`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customGet`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPut`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes all events related to the specified user token from events metrics and analytics. The deletion is asynchronous, and processed within 48 hours. To delete a personalization user profile, see `Delete a user profile` in the Personalization API.
     * @param deleteUserToken - The deleteUserToken object.
     * @param deleteUserToken.userToken - User token for which to delete all associated events.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteUserToken({ userToken }, requestOptions) {
      if (!userToken) {
        throw new Error("Parameter `userToken` is required when calling `deleteUserToken`.");
      }
      const requestPath = "/1/usertokens/{userToken}".replace("{userToken}", encodeURIComponent(userToken));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Sends a list of events to the Insights API.  You can include up to 1,000 events in a single request, but the request body must be smaller than 2&nbsp;MB.
     * @param insightsEvents - The insightsEvents object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    pushEvents(insightsEvents, requestOptions) {
      if (!insightsEvents) {
        throw new Error("Parameter `insightsEvents` is required when calling `pushEvents`.");
      }
      if (!insightsEvents.events) {
        throw new Error("Parameter `insightsEvents.events` is required when calling `pushEvents`.");
      }
      const requestPath = "/1/events";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: insightsEvents
      };
      return transporter.request(request, requestOptions);
    }
  };
}

// builds/node.ts
function insightsClient(appId, apiKey, region, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  if (region && (typeof region !== "string" || !REGIONS$3.includes(region))) {
    throw new Error(`\`region\` must be one of the following: ${REGIONS$3.join(", ")}`);
  }
  return {
    ...createInsightsClient({
      appId,
      apiKey,
      region,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: "Node.js", version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options
    })
  };
}

var client_insights_star = /*#__PURE__*/Object.freeze({
  __proto__: null,
  apiClientVersion: apiClientVersion$6,
  insightsClient: insightsClient
});

// builds/node.ts
var apiClientVersion$5 = "5.13.0";
var REGIONS$2 = ["eu", "us"];
function getDefaultHosts$5(region) {
  const url = "personalization.{region}.algolia.com".replace("{region}", region);
  return [{ url, accept: "readWrite", protocol: "https" }];
}
function createPersonalizationClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  region: regionOption,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts$5(regionOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Personalization",
      version: apiClientVersion$5
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customDelete`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customGet`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPut`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a user profile.  The response includes a date and time when the user profile can safely be considered deleted.
     *
     * Required API Key ACLs:
     *  - recommendation
     * @param deleteUserProfile - The deleteUserProfile object.
     * @param deleteUserProfile.userToken - Unique identifier representing a user for which to fetch the personalization profile.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteUserProfile({ userToken }, requestOptions) {
      if (!userToken) {
        throw new Error("Parameter `userToken` is required when calling `deleteUserProfile`.");
      }
      const requestPath = "/1/profiles/{userToken}".replace("{userToken}", encodeURIComponent(userToken));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the current personalization strategy.
     *
     * Required API Key ACLs:
     *  - recommendation
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getPersonalizationStrategy(requestOptions) {
      const requestPath = "/1/strategies/personalization";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a user profile and their affinities for different facets.
     *
     * Required API Key ACLs:
     *  - recommendation
     * @param getUserTokenProfile - The getUserTokenProfile object.
     * @param getUserTokenProfile.userToken - Unique identifier representing a user for which to fetch the personalization profile.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getUserTokenProfile({ userToken }, requestOptions) {
      if (!userToken) {
        throw new Error("Parameter `userToken` is required when calling `getUserTokenProfile`.");
      }
      const requestPath = "/1/profiles/personalization/{userToken}".replace(
        "{userToken}",
        encodeURIComponent(userToken)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Creates a new personalization strategy.
     *
     * Required API Key ACLs:
     *  - recommendation
     * @param personalizationStrategyParams - The personalizationStrategyParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    setPersonalizationStrategy(personalizationStrategyParams, requestOptions) {
      if (!personalizationStrategyParams) {
        throw new Error(
          "Parameter `personalizationStrategyParams` is required when calling `setPersonalizationStrategy`."
        );
      }
      if (!personalizationStrategyParams.eventScoring) {
        throw new Error(
          "Parameter `personalizationStrategyParams.eventScoring` is required when calling `setPersonalizationStrategy`."
        );
      }
      if (!personalizationStrategyParams.facetScoring) {
        throw new Error(
          "Parameter `personalizationStrategyParams.facetScoring` is required when calling `setPersonalizationStrategy`."
        );
      }
      if (!personalizationStrategyParams.personalizationImpact) {
        throw new Error(
          "Parameter `personalizationStrategyParams.personalizationImpact` is required when calling `setPersonalizationStrategy`."
        );
      }
      const requestPath = "/1/strategies/personalization";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: personalizationStrategyParams
      };
      return transporter.request(request, requestOptions);
    }
  };
}

// builds/node.ts
function personalizationClient(appId, apiKey, region, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  if (!region || region && (typeof region !== "string" || !REGIONS$2.includes(region))) {
    throw new Error(`\`region\` is required and must be one of the following: ${REGIONS$2.join(", ")}`);
  }
  return {
    ...createPersonalizationClient({
      appId,
      apiKey,
      region,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: "Node.js", version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options
    })
  };
}

var client_personalization_star = /*#__PURE__*/Object.freeze({
  __proto__: null,
  apiClientVersion: apiClientVersion$5,
  personalizationClient: personalizationClient
});

// builds/node.ts
var apiClientVersion$4 = "5.13.0";
var REGIONS$1 = ["eu", "us"];
function getDefaultHosts$4(region) {
  const url = "query-suggestions.{region}.algolia.com".replace("{region}", region);
  return [{ url, accept: "readWrite", protocol: "https" }];
}
function createQuerySuggestionsClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  region: regionOption,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts$4(regionOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "QuerySuggestions",
      version: apiClientVersion$4
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * Creates a new Query Suggestions configuration.  You can have up to 100 configurations per Algolia application.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param configurationWithIndex - The configurationWithIndex object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    createConfig(configurationWithIndex, requestOptions) {
      if (!configurationWithIndex) {
        throw new Error("Parameter `configurationWithIndex` is required when calling `createConfig`.");
      }
      const requestPath = "/1/configs";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: configurationWithIndex
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customDelete`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customGet`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPut`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a Query Suggestions configuration.  Deleting only removes the configuration and stops updates to the Query Suggestions index. To delete the Query Suggestions index itself, use the Search API and the `Delete an index` operation.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param deleteConfig - The deleteConfig object.
     * @param deleteConfig.indexName - Query Suggestions index name.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteConfig({ indexName }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `deleteConfig`.");
      }
      const requestPath = "/1/configs/{indexName}".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves all Query Suggestions configurations of your Algolia application.
     *
     * Required API Key ACLs:
     *  - settings
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getAllConfigs(requestOptions) {
      const requestPath = "/1/configs";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a single Query Suggestions configuration by its index name.
     *
     * Required API Key ACLs:
     *  - settings
     * @param getConfig - The getConfig object.
     * @param getConfig.indexName - Query Suggestions index name.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getConfig({ indexName }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getConfig`.");
      }
      const requestPath = "/1/configs/{indexName}".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Reports the status of a Query Suggestions index.
     *
     * Required API Key ACLs:
     *  - settings
     * @param getConfigStatus - The getConfigStatus object.
     * @param getConfigStatus.indexName - Query Suggestions index name.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getConfigStatus({ indexName }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getConfigStatus`.");
      }
      const requestPath = "/1/configs/{indexName}/status".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the logs for a single Query Suggestions index.
     *
     * Required API Key ACLs:
     *  - settings
     * @param getLogFile - The getLogFile object.
     * @param getLogFile.indexName - Query Suggestions index name.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getLogFile({ indexName }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getLogFile`.");
      }
      const requestPath = "/1/logs/{indexName}".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Updates a QuerySuggestions configuration.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param updateConfig - The updateConfig object.
     * @param updateConfig.indexName - Query Suggestions index name.
     * @param updateConfig.configuration - The configuration object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    updateConfig({ indexName, configuration }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `updateConfig`.");
      }
      if (!configuration) {
        throw new Error("Parameter `configuration` is required when calling `updateConfig`.");
      }
      if (!configuration.sourceIndices) {
        throw new Error("Parameter `configuration.sourceIndices` is required when calling `updateConfig`.");
      }
      const requestPath = "/1/configs/{indexName}".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: configuration
      };
      return transporter.request(request, requestOptions);
    }
  };
}

// builds/node.ts
function querySuggestionsClient(appId, apiKey, region, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  if (!region || region && (typeof region !== "string" || !REGIONS$1.includes(region))) {
    throw new Error(`\`region\` is required and must be one of the following: ${REGIONS$1.join(", ")}`);
  }
  return {
    ...createQuerySuggestionsClient({
      appId,
      apiKey,
      region,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: "Node.js", version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options
    })
  };
}

var client_query_suggestions_star = /*#__PURE__*/Object.freeze({
  __proto__: null,
  apiClientVersion: apiClientVersion$4,
  querySuggestionsClient: querySuggestionsClient
});

// builds/node.ts
var apiClientVersion$3 = "5.13.0";
function getDefaultHosts$3(appId) {
  return [
    {
      url: `${appId}-dsn.algolia.net`,
      accept: "read",
      protocol: "https"
    },
    {
      url: `${appId}.algolia.net`,
      accept: "write",
      protocol: "https"
    }
  ].concat(
    shuffle([
      {
        url: `${appId}-1.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-2.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-3.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      }
    ])
  );
}
function createSearchClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts$3(appIdOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Search",
      version: apiClientVersion$3
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * Helper: Wait for a task to be published (completed) for a given `indexName` and `taskID`.
     *
     * @summary Helper method that waits for a task to be published (completed).
     * @param waitForTaskOptions - The `waitForTaskOptions` object.
     * @param waitForTaskOptions.indexName - The `indexName` where the operation was performed.
     * @param waitForTaskOptions.taskID - The `taskID` returned in the method response.
     * @param waitForTaskOptions.maxRetries - The maximum number of retries. 50 by default.
     * @param waitForTaskOptions.timeout - The function to decide how long to wait between retries.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `getTask` method and merged with the transporter requestOptions.
     */
    waitForTask({
      indexName,
      taskID,
      maxRetries = 50,
      timeout = (retryCount) => Math.min(retryCount * 200, 5e3)
    }, requestOptions) {
      let retryCount = 0;
      return createIterablePromise({
        func: () => this.getTask({ indexName, taskID }, requestOptions),
        validate: (response) => response.status === "published",
        aggregator: () => retryCount += 1,
        error: {
          validate: () => retryCount >= maxRetries,
          message: () => `The maximum number of retries exceeded. (${retryCount}/${maxRetries})`
        },
        timeout: () => timeout(retryCount)
      });
    },
    /**
     * Helper: Wait for an application-level task to complete for a given `taskID`.
     *
     * @summary Helper method that waits for a task to be published (completed).
     * @param waitForAppTaskOptions - The `waitForTaskOptions` object.
     * @param waitForAppTaskOptions.taskID - The `taskID` returned in the method response.
     * @param waitForAppTaskOptions.maxRetries - The maximum number of retries. 50 by default.
     * @param waitForAppTaskOptions.timeout - The function to decide how long to wait between retries.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `getTask` method and merged with the transporter requestOptions.
     */
    waitForAppTask({
      taskID,
      maxRetries = 50,
      timeout = (retryCount) => Math.min(retryCount * 200, 5e3)
    }, requestOptions) {
      let retryCount = 0;
      return createIterablePromise({
        func: () => this.getAppTask({ taskID }, requestOptions),
        validate: (response) => response.status === "published",
        aggregator: () => retryCount += 1,
        error: {
          validate: () => retryCount >= maxRetries,
          message: () => `The maximum number of retries exceeded. (${retryCount}/${maxRetries})`
        },
        timeout: () => timeout(retryCount)
      });
    },
    /**
     * Helper: Wait for an API key to be added, updated or deleted based on a given `operation`.
     *
     * @summary Helper method that waits for an API key task to be processed.
     * @param waitForApiKeyOptions - The `waitForApiKeyOptions` object.
     * @param waitForApiKeyOptions.operation - The `operation` that was done on a `key`.
     * @param waitForApiKeyOptions.key - The `key` that has been added, deleted or updated.
     * @param waitForApiKeyOptions.apiKey - Necessary to know if an `update` operation has been processed, compare fields of the response with it.
     * @param waitForApiKeyOptions.maxRetries - The maximum number of retries. 50 by default.
     * @param waitForApiKeyOptions.timeout - The function to decide how long to wait between retries.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `getApikey` method and merged with the transporter requestOptions.
     */
    waitForApiKey({
      operation,
      key,
      apiKey,
      maxRetries = 50,
      timeout = (retryCount) => Math.min(retryCount * 200, 5e3)
    }, requestOptions) {
      let retryCount = 0;
      const baseIteratorOptions = {
        aggregator: () => retryCount += 1,
        error: {
          validate: () => retryCount >= maxRetries,
          message: () => `The maximum number of retries exceeded. (${retryCount}/${maxRetries})`
        },
        timeout: () => timeout(retryCount)
      };
      if (operation === "update") {
        if (!apiKey) {
          throw new Error("`apiKey` is required when waiting for an `update` operation.");
        }
        return createIterablePromise({
          ...baseIteratorOptions,
          func: () => this.getApiKey({ key }, requestOptions),
          validate: (response) => {
            for (const field of Object.keys(apiKey)) {
              const value = apiKey[field];
              const resValue = response[field];
              if (Array.isArray(value) && Array.isArray(resValue)) {
                if (value.length !== resValue.length || value.some((v, index) => v !== resValue[index])) {
                  return false;
                }
              } else if (value !== resValue) {
                return false;
              }
            }
            return true;
          }
        });
      }
      return createIterablePromise({
        ...baseIteratorOptions,
        func: () => this.getApiKey({ key }, requestOptions).catch((error) => {
          if (error.status === 404) {
            return void 0;
          }
          throw error;
        }),
        validate: (response) => operation === "add" ? response !== void 0 : response === void 0
      });
    },
    /**
     * Helper: Iterate on the `browse` method of the client to allow aggregating objects of an index.
     *
     * @summary Helper method that iterates on the `browse` method.
     * @param browseObjects - The `browseObjects` object.
     * @param browseObjects.indexName - The index in which to perform the request.
     * @param browseObjects.browseParams - The `browse` parameters.
     * @param browseObjects.validate - The validator function. It receive the resolved return of the API call. By default, stops when there is no `cursor` in the response.
     * @param browseObjects.aggregator - The function that runs right after the API call has been resolved, allows you to do anything with the response before `validate`.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `browse` method and merged with the transporter requestOptions.
     */
    browseObjects({ indexName, browseParams, ...browseObjectsOptions }, requestOptions) {
      return createIterablePromise({
        func: (previousResponse) => {
          return this.browse(
            {
              indexName,
              browseParams: {
                cursor: previousResponse ? previousResponse.cursor : void 0,
                hitsPerPage: 1e3,
                ...browseParams
              }
            },
            requestOptions
          );
        },
        validate: (response) => response.cursor === void 0,
        ...browseObjectsOptions
      });
    },
    /**
     * Helper: Iterate on the `searchRules` method of the client to allow aggregating rules of an index.
     *
     * @summary Helper method that iterates on the `searchRules` method.
     * @param browseRules - The `browseRules` object.
     * @param browseRules.indexName - The index in which to perform the request.
     * @param browseRules.searchRulesParams - The `searchRules` method parameters.
     * @param browseRules.validate - The validator function. It receive the resolved return of the API call. By default, stops when there is less hits returned than the number of maximum hits (1000).
     * @param browseRules.aggregator - The function that runs right after the API call has been resolved, allows you to do anything with the response before `validate`.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `searchRules` method and merged with the transporter requestOptions.
     */
    browseRules({ indexName, searchRulesParams, ...browseRulesOptions }, requestOptions) {
      const params = {
        hitsPerPage: 1e3,
        ...searchRulesParams
      };
      return createIterablePromise({
        func: (previousResponse) => {
          return this.searchRules(
            {
              indexName,
              searchRulesParams: {
                ...params,
                page: previousResponse ? previousResponse.page + 1 : params.page || 0
              }
            },
            requestOptions
          );
        },
        validate: (response) => response.hits.length < params.hitsPerPage,
        ...browseRulesOptions
      });
    },
    /**
     * Helper: Iterate on the `searchSynonyms` method of the client to allow aggregating rules of an index.
     *
     * @summary Helper method that iterates on the `searchSynonyms` method.
     * @param browseSynonyms - The `browseSynonyms` object.
     * @param browseSynonyms.indexName - The index in which to perform the request.
     * @param browseSynonyms.validate - The validator function. It receive the resolved return of the API call. By default, stops when there is less hits returned than the number of maximum hits (1000).
     * @param browseSynonyms.aggregator - The function that runs right after the API call has been resolved, allows you to do anything with the response before `validate`.
     * @param browseSynonyms.searchSynonymsParams - The `searchSynonyms` method parameters.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `searchSynonyms` method and merged with the transporter requestOptions.
     */
    browseSynonyms({
      indexName,
      searchSynonymsParams,
      ...browseSynonymsOptions
    }, requestOptions) {
      const params = {
        page: 0,
        ...searchSynonymsParams,
        hitsPerPage: 1e3
      };
      return createIterablePromise({
        func: (_) => {
          const resp = this.searchSynonyms(
            {
              indexName,
              searchSynonymsParams: {
                ...params,
                page: params.page
              }
            },
            requestOptions
          );
          params.page += 1;
          return resp;
        },
        validate: (response) => response.hits.length < params.hitsPerPage,
        ...browseSynonymsOptions
      });
    },
    /**
     * Helper: Chunks the given `objects` list in subset of 1000 elements max in order to make it fit in `batch` requests.
     *
     * @summary Helper: Chunks the given `objects` list in subset of 1000 elements max in order to make it fit in `batch` requests.
     * @param chunkedBatch - The `chunkedBatch` object.
     * @param chunkedBatch.indexName - The `indexName` to replace `objects` in.
     * @param chunkedBatch.objects - The array of `objects` to store in the given Algolia `indexName`.
     * @param chunkedBatch.action - The `batch` `action` to perform on the given array of `objects`, defaults to `addObject`.
     * @param chunkedBatch.waitForTasks - Whether or not we should wait until every `batch` tasks has been processed, this operation may slow the total execution time of this method but is more reliable.
     * @param chunkedBatch.batchSize - The size of the chunk of `objects`. The number of `batch` calls will be equal to `length(objects) / batchSize`. Defaults to 1000.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `getTask` method and merged with the transporter requestOptions.
     */
    async chunkedBatch({ indexName, objects, action = "addObject", waitForTasks, batchSize = 1e3 }, requestOptions) {
      let requests = [];
      const responses = [];
      const objectEntries = objects.entries();
      for (const [i, obj] of objectEntries) {
        requests.push({ action, body: obj });
        if (requests.length === batchSize || i === objects.length - 1) {
          responses.push(await this.batch({ indexName, batchWriteParams: { requests } }, requestOptions));
          requests = [];
        }
      }
      if (waitForTasks) {
        for (const resp of responses) {
          await this.waitForTask({ indexName, taskID: resp.taskID });
        }
      }
      return responses;
    },
    /**
     * Helper: Saves the given array of objects in the given index. The `chunkedBatch` helper is used under the hood, which creates a `batch` requests with at most 1000 objects in it.
     *
     * @summary Helper: Saves the given array of objects in the given index. The `chunkedBatch` helper is used under the hood, which creates a `batch` requests with at most 1000 objects in it.
     * @param saveObjects - The `saveObjects` object.
     * @param saveObjects.indexName - The `indexName` to save `objects` in.
     * @param saveObjects.objects - The array of `objects` to store in the given Algolia `indexName`.
     * @param saveObjects.waitForTasks - Whether or not we should wait until every `batch` tasks has been processed, this operation may slow the total execution time of this method but is more reliable.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `batch` method and merged with the transporter requestOptions.
     */
    async saveObjects({ indexName, objects, waitForTasks }, requestOptions) {
      return await this.chunkedBatch({ indexName, objects, action: "addObject", waitForTasks }, requestOptions);
    },
    /**
     * Helper: Deletes every records for the given objectIDs. The `chunkedBatch` helper is used under the hood, which creates a `batch` requests with at most 1000 objectIDs in it.
     *
     * @summary Helper: Deletes every records for the given objectIDs. The `chunkedBatch` helper is used under the hood, which creates a `batch` requests with at most 1000 objectIDs in it.
     * @param deleteObjects - The `deleteObjects` object.
     * @param deleteObjects.indexName - The `indexName` to delete `objectIDs` from.
     * @param deleteObjects.objectIDs - The objectIDs to delete.
     * @param deleteObjects.waitForTasks - Whether or not we should wait until every `batch` tasks has been processed, this operation may slow the total execution time of this method but is more reliable.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `batch` method and merged with the transporter requestOptions.
     */
    async deleteObjects({ indexName, objectIDs, waitForTasks }, requestOptions) {
      return await this.chunkedBatch(
        {
          indexName,
          objects: objectIDs.map((objectID) => ({ objectID })),
          action: "deleteObject",
          waitForTasks
        },
        requestOptions
      );
    },
    /**
     * Helper: Replaces object content of all the given objects according to their respective `objectID` field. The `chunkedBatch` helper is used under the hood, which creates a `batch` requests with at most 1000 objects in it.
     *
     * @summary Helper: Replaces object content of all the given objects according to their respective `objectID` field. The `chunkedBatch` helper is used under the hood, which creates a `batch` requests with at most 1000 objects in it.
     * @param partialUpdateObjects - The `partialUpdateObjects` object.
     * @param partialUpdateObjects.indexName - The `indexName` to update `objects` in.
     * @param partialUpdateObjects.objects - The array of `objects` to update in the given Algolia `indexName`.
     * @param partialUpdateObjects.createIfNotExists - To be provided if non-existing objects are passed, otherwise, the call will fail..
     * @param partialUpdateObjects.waitForTasks - Whether or not we should wait until every `batch` tasks has been processed, this operation may slow the total execution time of this method but is more reliable.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `getTask` method and merged with the transporter requestOptions.
     */
    async partialUpdateObjects({ indexName, objects, createIfNotExists, waitForTasks }, requestOptions) {
      return await this.chunkedBatch(
        {
          indexName,
          objects,
          action: createIfNotExists ? "partialUpdateObject" : "partialUpdateObjectNoCreate",
          waitForTasks
        },
        requestOptions
      );
    },
    /**
     * Helper: Replaces all objects (records) in the given `index_name` with the given `objects`. A temporary index is created during this process in order to backup your data.
     * See https://api-clients-automation.netlify.app/docs/add-new-api-client#5-helpers for implementation details.
     *
     * @summary Helper: Replaces all objects (records) in the given `index_name` with the given `objects`. A temporary index is created during this process in order to backup your data.
     * @param replaceAllObjects - The `replaceAllObjects` object.
     * @param replaceAllObjects.indexName - The `indexName` to replace `objects` in.
     * @param replaceAllObjects.objects - The array of `objects` to store in the given Algolia `indexName`.
     * @param replaceAllObjects.batchSize - The size of the chunk of `objects`. The number of `batch` calls will be equal to `objects.length / batchSize`. Defaults to 1000.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `batch`, `operationIndex` and `getTask` method and merged with the transporter requestOptions.
     */
    async replaceAllObjects({ indexName, objects, batchSize }, requestOptions) {
      const randomSuffix = Math.floor(Math.random() * 1e6) + 1e5;
      const tmpIndexName = `${indexName}_tmp_${randomSuffix}`;
      let copyOperationResponse = await this.operationIndex(
        {
          indexName,
          operationIndexParams: {
            operation: "copy",
            destination: tmpIndexName,
            scope: ["settings", "rules", "synonyms"]
          }
        },
        requestOptions
      );
      const batchResponses = await this.chunkedBatch(
        { indexName: tmpIndexName, objects, waitForTasks: true, batchSize },
        requestOptions
      );
      await this.waitForTask({
        indexName: tmpIndexName,
        taskID: copyOperationResponse.taskID
      });
      copyOperationResponse = await this.operationIndex(
        {
          indexName,
          operationIndexParams: {
            operation: "copy",
            destination: tmpIndexName,
            scope: ["settings", "rules", "synonyms"]
          }
        },
        requestOptions
      );
      await this.waitForTask({
        indexName: tmpIndexName,
        taskID: copyOperationResponse.taskID
      });
      const moveOperationResponse = await this.operationIndex(
        {
          indexName: tmpIndexName,
          operationIndexParams: { operation: "move", destination: indexName }
        },
        requestOptions
      );
      await this.waitForTask({
        indexName: tmpIndexName,
        taskID: moveOperationResponse.taskID
      });
      return { copyOperationResponse, batchResponses, moveOperationResponse };
    },
    async indexExists({ indexName }) {
      try {
        await this.getSettings({ indexName });
      } catch (error) {
        if (error instanceof ApiError && error.status === 404) {
          return false;
        }
        throw error;
      }
      return true;
    },
    /**
     * Helper: calls the `search` method but with certainty that we will only request Algolia records (hits) and not facets.
     * Disclaimer: We don't assert that the parameters you pass to this method only contains `hits` requests to prevent impacting search performances, this helper is purely for typing purposes.
     *
     * @summary Search multiple indices for `hits`.
     * @param searchMethodParams - Query requests and strategies. Results will be received in the same order as the queries.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchForHits(searchMethodParams, requestOptions) {
      return this.search(searchMethodParams, requestOptions);
    },
    /**
     * Helper: calls the `search` method but with certainty that we will only request Algolia facets and not records (hits).
     * Disclaimer: We don't assert that the parameters you pass to this method only contains `facets` requests to prevent impacting search performances, this helper is purely for typing purposes.
     *
     * @summary Search multiple indices for `facets`.
     * @param searchMethodParams - Query requests and strategies. Results will be received in the same order as the queries.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchForFacets(searchMethodParams, requestOptions) {
      return this.search(searchMethodParams, requestOptions);
    },
    /**
     * Creates a new API key with specific permissions and restrictions.
     *
     * Required API Key ACLs:
     *  - admin
     * @param apiKey - The apiKey object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    addApiKey(apiKey, requestOptions) {
      if (!apiKey) {
        throw new Error("Parameter `apiKey` is required when calling `addApiKey`.");
      }
      if (!apiKey.acl) {
        throw new Error("Parameter `apiKey.acl` is required when calling `addApiKey`.");
      }
      const requestPath = "/1/keys";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: apiKey
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * If a record with the specified object ID exists, the existing record is replaced. Otherwise, a new record is added to the index.  To update _some_ attributes of an existing record, use the [`partial` operation](#tag/Records/operation/partialUpdateObject) instead. To add, update, or replace multiple records, use the [`batch` operation](#tag/Records/operation/batch).
     *
     * Required API Key ACLs:
     *  - addObject
     * @param addOrUpdateObject - The addOrUpdateObject object.
     * @param addOrUpdateObject.indexName - Name of the index on which to perform the operation.
     * @param addOrUpdateObject.objectID - Unique record identifier.
     * @param addOrUpdateObject.body - The record. A schemaless object with attributes that are useful in the context of search and discovery.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    addOrUpdateObject({ indexName, objectID, body }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `addOrUpdateObject`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `addOrUpdateObject`.");
      }
      if (!body) {
        throw new Error("Parameter `body` is required when calling `addOrUpdateObject`.");
      }
      const requestPath = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Adds a source to the list of allowed sources.
     *
     * Required API Key ACLs:
     *  - admin
     * @param source - Source to add.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    appendSource(source, requestOptions) {
      if (!source) {
        throw new Error("Parameter `source` is required when calling `appendSource`.");
      }
      if (!source.source) {
        throw new Error("Parameter `source.source` is required when calling `appendSource`.");
      }
      const requestPath = "/1/security/sources/append";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: source
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Assigns or moves a user ID to a cluster.  The time it takes to move a user is proportional to the amount of data linked to the user ID.
     *
     * Required API Key ACLs:
     *  - admin
     * @param assignUserId - The assignUserId object.
     * @param assignUserId.xAlgoliaUserID - Unique identifier of the user who makes the search request.
     * @param assignUserId.assignUserIdParams - The assignUserIdParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    assignUserId({ xAlgoliaUserID, assignUserIdParams }, requestOptions) {
      if (!xAlgoliaUserID) {
        throw new Error("Parameter `xAlgoliaUserID` is required when calling `assignUserId`.");
      }
      if (!assignUserIdParams) {
        throw new Error("Parameter `assignUserIdParams` is required when calling `assignUserId`.");
      }
      if (!assignUserIdParams.cluster) {
        throw new Error("Parameter `assignUserIdParams.cluster` is required when calling `assignUserId`.");
      }
      const requestPath = "/1/clusters/mapping";
      const headers = {};
      const queryParameters = {};
      if (xAlgoliaUserID !== void 0) {
        headers["X-Algolia-User-ID"] = xAlgoliaUserID.toString();
      }
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: assignUserIdParams
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Adds, updates, or deletes records in one index with a single API request.  Batching index updates reduces latency and increases data integrity.  - Actions are applied in the order they\'re specified. - Actions are equivalent to the individual API requests of the same name.
     * @param batch - The batch object.
     * @param batch.indexName - Name of the index on which to perform the operation.
     * @param batch.batchWriteParams - The batchWriteParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    batch({ indexName, batchWriteParams }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `batch`.");
      }
      if (!batchWriteParams) {
        throw new Error("Parameter `batchWriteParams` is required when calling `batch`.");
      }
      if (!batchWriteParams.requests) {
        throw new Error("Parameter `batchWriteParams.requests` is required when calling `batch`.");
      }
      const requestPath = "/1/indexes/{indexName}/batch".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: batchWriteParams
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Assigns multiple user IDs to a cluster.  **You can\'t move users with this operation**.
     *
     * Required API Key ACLs:
     *  - admin
     * @param batchAssignUserIds - The batchAssignUserIds object.
     * @param batchAssignUserIds.xAlgoliaUserID - Unique identifier of the user who makes the search request.
     * @param batchAssignUserIds.batchAssignUserIdsParams - The batchAssignUserIdsParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    batchAssignUserIds({ xAlgoliaUserID, batchAssignUserIdsParams }, requestOptions) {
      if (!xAlgoliaUserID) {
        throw new Error("Parameter `xAlgoliaUserID` is required when calling `batchAssignUserIds`.");
      }
      if (!batchAssignUserIdsParams) {
        throw new Error("Parameter `batchAssignUserIdsParams` is required when calling `batchAssignUserIds`.");
      }
      if (!batchAssignUserIdsParams.cluster) {
        throw new Error("Parameter `batchAssignUserIdsParams.cluster` is required when calling `batchAssignUserIds`.");
      }
      if (!batchAssignUserIdsParams.users) {
        throw new Error("Parameter `batchAssignUserIdsParams.users` is required when calling `batchAssignUserIds`.");
      }
      const requestPath = "/1/clusters/mapping/batch";
      const headers = {};
      const queryParameters = {};
      if (xAlgoliaUserID !== void 0) {
        headers["X-Algolia-User-ID"] = xAlgoliaUserID.toString();
      }
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: batchAssignUserIdsParams
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Adds or deletes multiple entries from your plurals, segmentation, or stop word dictionaries.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param batchDictionaryEntries - The batchDictionaryEntries object.
     * @param batchDictionaryEntries.dictionaryName - Dictionary type in which to search.
     * @param batchDictionaryEntries.batchDictionaryEntriesParams - The batchDictionaryEntriesParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    batchDictionaryEntries({ dictionaryName, batchDictionaryEntriesParams }, requestOptions) {
      if (!dictionaryName) {
        throw new Error("Parameter `dictionaryName` is required when calling `batchDictionaryEntries`.");
      }
      if (!batchDictionaryEntriesParams) {
        throw new Error("Parameter `batchDictionaryEntriesParams` is required when calling `batchDictionaryEntries`.");
      }
      if (!batchDictionaryEntriesParams.requests) {
        throw new Error(
          "Parameter `batchDictionaryEntriesParams.requests` is required when calling `batchDictionaryEntries`."
        );
      }
      const requestPath = "/1/dictionaries/{dictionaryName}/batch".replace(
        "{dictionaryName}",
        encodeURIComponent(dictionaryName)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: batchDictionaryEntriesParams
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves records from an index, up to 1,000 per request.  While searching retrieves _hits_ (records augmented with attributes for highlighting and ranking details), browsing _just_ returns matching records. This can be useful if you want to export your indices.  - The Analytics API doesn\'t collect data when using `browse`. - Records are ranked by attributes and custom ranking. - There\'s no ranking for: typo-tolerance, number of matched words, proximity, geo distance.  Browse requests automatically apply these settings:  - `advancedSyntax`: `false` - `attributesToHighlight`: `[]` - `attributesToSnippet`: `[]` - `distinct`: `false` - `enablePersonalization`: `false` - `enableRules`: `false` - `facets`: `[]` - `getRankingInfo`: `false` - `ignorePlurals`: `false` - `optionalFilters`: `[]` - `typoTolerance`: `true` or `false` (`min` and `strict` evaluate to `true`)  If you send these parameters with your browse requests, they\'ll be ignored.
     *
     * Required API Key ACLs:
     *  - browse
     * @param browse - The browse object.
     * @param browse.indexName - Name of the index on which to perform the operation.
     * @param browse.browseParams - The browseParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    browse({ indexName, browseParams }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `browse`.");
      }
      const requestPath = "/1/indexes/{indexName}/browse".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: browseParams ? browseParams : {},
        useReadTransporter: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes only the records from an index while keeping settings, synonyms, and rules.
     *
     * Required API Key ACLs:
     *  - deleteIndex
     * @param clearObjects - The clearObjects object.
     * @param clearObjects.indexName - Name of the index on which to perform the operation.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    clearObjects({ indexName }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `clearObjects`.");
      }
      const requestPath = "/1/indexes/{indexName}/clear".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes all rules from the index.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param clearRules - The clearRules object.
     * @param clearRules.indexName - Name of the index on which to perform the operation.
     * @param clearRules.forwardToReplicas - Whether changes are applied to replica indices.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    clearRules({ indexName, forwardToReplicas }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `clearRules`.");
      }
      const requestPath = "/1/indexes/{indexName}/rules/clear".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      if (forwardToReplicas !== void 0) {
        queryParameters["forwardToReplicas"] = forwardToReplicas.toString();
      }
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes all synonyms from the index.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param clearSynonyms - The clearSynonyms object.
     * @param clearSynonyms.indexName - Name of the index on which to perform the operation.
     * @param clearSynonyms.forwardToReplicas - Whether changes are applied to replica indices.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    clearSynonyms({ indexName, forwardToReplicas }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `clearSynonyms`.");
      }
      const requestPath = "/1/indexes/{indexName}/synonyms/clear".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      if (forwardToReplicas !== void 0) {
        queryParameters["forwardToReplicas"] = forwardToReplicas.toString();
      }
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customDelete`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customGet`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPut`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes the API key.
     *
     * Required API Key ACLs:
     *  - admin
     * @param deleteApiKey - The deleteApiKey object.
     * @param deleteApiKey.key - API key.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteApiKey({ key }, requestOptions) {
      if (!key) {
        throw new Error("Parameter `key` is required when calling `deleteApiKey`.");
      }
      const requestPath = "/1/keys/{key}".replace("{key}", encodeURIComponent(key));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This operation doesn\'t accept empty queries or filters.  It\'s more efficient to get a list of object IDs with the [`browse` operation](#tag/Search/operation/browse), and then delete the records using the [`batch` operation](#tag/Records/operation/batch).
     *
     * Required API Key ACLs:
     *  - deleteIndex
     * @param deleteBy - The deleteBy object.
     * @param deleteBy.indexName - Name of the index on which to perform the operation.
     * @param deleteBy.deleteByParams - The deleteByParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteBy({ indexName, deleteByParams }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `deleteBy`.");
      }
      if (!deleteByParams) {
        throw new Error("Parameter `deleteByParams` is required when calling `deleteBy`.");
      }
      const requestPath = "/1/indexes/{indexName}/deleteByQuery".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: deleteByParams
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes an index and all its settings.  - Deleting an index doesn\'t delete its analytics data. - If you try to delete a non-existing index, the operation is ignored without warning. - If the index you want to delete has replica indices, the replicas become independent indices. - If the index you want to delete is a replica index, you must first unlink it from its primary index before you can delete it.   For more information, see [Delete replica indices](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/deleting-replicas/).
     *
     * Required API Key ACLs:
     *  - deleteIndex
     * @param deleteIndex - The deleteIndex object.
     * @param deleteIndex.indexName - Name of the index on which to perform the operation.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteIndex({ indexName }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `deleteIndex`.");
      }
      const requestPath = "/1/indexes/{indexName}".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a record by its object ID.  To delete more than one record, use the [`batch` operation](#tag/Records/operation/batch). To delete records matching a query, use the [`deleteByQuery` operation](#tag/Records/operation/deleteBy).
     *
     * Required API Key ACLs:
     *  - deleteObject
     * @param deleteObject - The deleteObject object.
     * @param deleteObject.indexName - Name of the index on which to perform the operation.
     * @param deleteObject.objectID - Unique record identifier.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteObject({ indexName, objectID }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `deleteObject`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `deleteObject`.");
      }
      const requestPath = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a rule by its ID. To find the object ID for rules, use the [`search` operation](#tag/Rules/operation/searchRules).
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param deleteRule - The deleteRule object.
     * @param deleteRule.indexName - Name of the index on which to perform the operation.
     * @param deleteRule.objectID - Unique identifier of a rule object.
     * @param deleteRule.forwardToReplicas - Whether changes are applied to replica indices.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteRule({ indexName, objectID, forwardToReplicas }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `deleteRule`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `deleteRule`.");
      }
      const requestPath = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      if (forwardToReplicas !== void 0) {
        queryParameters["forwardToReplicas"] = forwardToReplicas.toString();
      }
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a source from the list of allowed sources.
     *
     * Required API Key ACLs:
     *  - admin
     * @param deleteSource - The deleteSource object.
     * @param deleteSource.source - IP address range of the source.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteSource({ source }, requestOptions) {
      if (!source) {
        throw new Error("Parameter `source` is required when calling `deleteSource`.");
      }
      const requestPath = "/1/security/sources/{source}".replace("{source}", encodeURIComponent(source));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a synonym by its ID. To find the object IDs of your synonyms, use the [`search` operation](#tag/Synonyms/operation/searchSynonyms).
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param deleteSynonym - The deleteSynonym object.
     * @param deleteSynonym.indexName - Name of the index on which to perform the operation.
     * @param deleteSynonym.objectID - Unique identifier of a synonym object.
     * @param deleteSynonym.forwardToReplicas - Whether changes are applied to replica indices.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteSynonym({ indexName, objectID, forwardToReplicas }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `deleteSynonym`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `deleteSynonym`.");
      }
      const requestPath = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      if (forwardToReplicas !== void 0) {
        queryParameters["forwardToReplicas"] = forwardToReplicas.toString();
      }
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Gets the permissions and restrictions of an API key.  When authenticating with the admin API key, you can request information for any of your application\'s keys. When authenticating with other API keys, you can only retrieve information for that key, with the description replaced by `<redacted>`.
     * @param getApiKey - The getApiKey object.
     * @param getApiKey.key - API key.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getApiKey({ key }, requestOptions) {
      if (!key) {
        throw new Error("Parameter `key` is required when calling `getApiKey`.");
      }
      const requestPath = "/1/keys/{key}".replace("{key}", encodeURIComponent(key));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Checks the status of a given application task.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param getAppTask - The getAppTask object.
     * @param getAppTask.taskID - Unique task identifier.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getAppTask({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `getAppTask`.");
      }
      const requestPath = "/1/task/{taskID}".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Lists supported languages with their supported dictionary types and number of custom entries.
     *
     * Required API Key ACLs:
     *  - settings
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getDictionaryLanguages(requestOptions) {
      const requestPath = "/1/dictionaries/*/languages";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the languages for which standard dictionary entries are turned off.
     *
     * Required API Key ACLs:
     *  - settings
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getDictionarySettings(requestOptions) {
      const requestPath = "/1/dictionaries/*/settings";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * The request must be authenticated by an API key with the [`logs` ACL](https://www.algolia.com/doc/guides/security/api-keys/#access-control-list-acl).  - Logs are held for the last seven days. - Up to 1,000 API requests per server are logged. - This request counts towards your [operations quota](https://support.algolia.com/hc/en-us/articles/4406981829777-How-does-Algolia-count-records-and-operations-) but doesn\'t appear in the logs itself.
     *
     * Required API Key ACLs:
     *  - logs
     * @param getLogs - The getLogs object.
     * @param getLogs.offset - First log entry to retrieve. The most recent entries are listed first.
     * @param getLogs.length - Maximum number of entries to retrieve.
     * @param getLogs.indexName - Index for which to retrieve log entries. By default, log entries are retrieved for all indices.
     * @param getLogs.type - Type of log entries to retrieve. By default, all log entries are retrieved.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getLogs({ offset, length, indexName, type } = {}, requestOptions = void 0) {
      const requestPath = "/1/logs";
      const headers = {};
      const queryParameters = {};
      if (offset !== void 0) {
        queryParameters["offset"] = offset.toString();
      }
      if (length !== void 0) {
        queryParameters["length"] = length.toString();
      }
      if (indexName !== void 0) {
        queryParameters["indexName"] = indexName.toString();
      }
      if (type !== void 0) {
        queryParameters["type"] = type.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves one record by its object ID.  To retrieve more than one record, use the [`objects` operation](#tag/Records/operation/getObjects).
     *
     * Required API Key ACLs:
     *  - search
     * @param getObject - The getObject object.
     * @param getObject.indexName - Name of the index on which to perform the operation.
     * @param getObject.objectID - Unique record identifier.
     * @param getObject.attributesToRetrieve - Attributes to include with the records in the response. This is useful to reduce the size of the API response. By default, all retrievable attributes are returned.  `objectID` is always retrieved.  Attributes included in `unretrievableAttributes` won\'t be retrieved unless the request is authenticated with the admin API key.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getObject({ indexName, objectID, attributesToRetrieve }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getObject`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `getObject`.");
      }
      const requestPath = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      if (attributesToRetrieve !== void 0) {
        queryParameters["attributesToRetrieve"] = attributesToRetrieve.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves one or more records, potentially from different indices.  Records are returned in the same order as the requests.
     *
     * Required API Key ACLs:
     *  - search
     * @param getObjectsParams - Request object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getObjects(getObjectsParams, requestOptions) {
      if (!getObjectsParams) {
        throw new Error("Parameter `getObjectsParams` is required when calling `getObjects`.");
      }
      if (!getObjectsParams.requests) {
        throw new Error("Parameter `getObjectsParams.requests` is required when calling `getObjects`.");
      }
      const requestPath = "/1/indexes/*/objects";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: getObjectsParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a rule by its ID. To find the object ID of rules, use the [`search` operation](#tag/Rules/operation/searchRules).
     *
     * Required API Key ACLs:
     *  - settings
     * @param getRule - The getRule object.
     * @param getRule.indexName - Name of the index on which to perform the operation.
     * @param getRule.objectID - Unique identifier of a rule object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRule({ indexName, objectID }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getRule`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `getRule`.");
      }
      const requestPath = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves an object with non-null index settings.
     *
     * Required API Key ACLs:
     *  - search
     * @param getSettings - The getSettings object.
     * @param getSettings.indexName - Name of the index on which to perform the operation.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getSettings({ indexName }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getSettings`.");
      }
      const requestPath = "/1/indexes/{indexName}/settings".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves all allowed IP addresses with access to your application.
     *
     * Required API Key ACLs:
     *  - admin
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getSources(requestOptions) {
      const requestPath = "/1/security/sources";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a synonym by its ID. To find the object IDs for your synonyms, use the [`search` operation](#tag/Synonyms/operation/searchSynonyms).
     *
     * Required API Key ACLs:
     *  - settings
     * @param getSynonym - The getSynonym object.
     * @param getSynonym.indexName - Name of the index on which to perform the operation.
     * @param getSynonym.objectID - Unique identifier of a synonym object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getSynonym({ indexName, objectID }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getSynonym`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `getSynonym`.");
      }
      const requestPath = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Checks the status of a given task.  Indexing tasks are asynchronous. When you add, update, or delete records or indices, a task is created on a queue and completed depending on the load on the server.  The indexing tasks\' responses include a task ID that you can use to check the status.
     *
     * Required API Key ACLs:
     *  - addObject
     * @param getTask - The getTask object.
     * @param getTask.indexName - Name of the index on which to perform the operation.
     * @param getTask.taskID - Unique task identifier.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTask({ indexName, taskID }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getTask`.");
      }
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `getTask`.");
      }
      const requestPath = "/1/indexes/{indexName}/task/{taskID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Get the IDs of the 10 users with the highest number of records per cluster.  Since it can take a few seconds to get the data from the different clusters, the response isn\'t real-time.
     *
     * Required API Key ACLs:
     *  - admin
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTopUserIds(requestOptions) {
      const requestPath = "/1/clusters/mapping/top";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Returns the user ID data stored in the mapping.  Since it can take a few seconds to get the data from the different clusters, the response isn\'t real-time.
     *
     * Required API Key ACLs:
     *  - admin
     * @param getUserId - The getUserId object.
     * @param getUserId.userID - Unique identifier of the user who makes the search request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getUserId({ userID }, requestOptions) {
      if (!userID) {
        throw new Error("Parameter `userID` is required when calling `getUserId`.");
      }
      const requestPath = "/1/clusters/mapping/{userID}".replace("{userID}", encodeURIComponent(userID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * To determine when the time-consuming process of creating a large batch of users or migrating users from one cluster to another is complete, this operation retrieves the status of the process.
     *
     * Required API Key ACLs:
     *  - admin
     * @param hasPendingMappings - The hasPendingMappings object.
     * @param hasPendingMappings.getClusters - Whether to include the cluster\'s pending mapping state in the response.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    hasPendingMappings({ getClusters } = {}, requestOptions = void 0) {
      const requestPath = "/1/clusters/mapping/pending";
      const headers = {};
      const queryParameters = {};
      if (getClusters !== void 0) {
        queryParameters["getClusters"] = getClusters.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Lists all API keys associated with your Algolia application, including their permissions and restrictions.
     *
     * Required API Key ACLs:
     *  - admin
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listApiKeys(requestOptions) {
      const requestPath = "/1/keys";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Lists the available clusters in a multi-cluster setup.
     *
     * Required API Key ACLs:
     *  - admin
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listClusters(requestOptions) {
      const requestPath = "/1/clusters";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Lists all indices in the current Algolia application.  The request follows any index restrictions of the API key you use to make the request.
     *
     * Required API Key ACLs:
     *  - listIndexes
     * @param listIndices - The listIndices object.
     * @param listIndices.page - Requested page of the API response. If `null`, the API response is not paginated.
     * @param listIndices.hitsPerPage - Number of hits per page.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listIndices({ page, hitsPerPage } = {}, requestOptions = void 0) {
      const requestPath = "/1/indexes";
      const headers = {};
      const queryParameters = {};
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (hitsPerPage !== void 0) {
        queryParameters["hitsPerPage"] = hitsPerPage.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Lists the userIDs assigned to a multi-cluster application.  Since it can take a few seconds to get the data from the different clusters, the response isn\'t real-time.
     *
     * Required API Key ACLs:
     *  - admin
     * @param listUserIds - The listUserIds object.
     * @param listUserIds.page - Requested page of the API response. If `null`, the API response is not paginated.
     * @param listUserIds.hitsPerPage - Number of hits per page.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listUserIds({ page, hitsPerPage } = {}, requestOptions = void 0) {
      const requestPath = "/1/clusters/mapping";
      const headers = {};
      const queryParameters = {};
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (hitsPerPage !== void 0) {
        queryParameters["hitsPerPage"] = hitsPerPage.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Adds, updates, or deletes records in multiple indices with a single API request.  - Actions are applied in the order they are specified. - Actions are equivalent to the individual API requests of the same name.
     * @param batchParams - The batchParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    multipleBatch(batchParams, requestOptions) {
      if (!batchParams) {
        throw new Error("Parameter `batchParams` is required when calling `multipleBatch`.");
      }
      if (!batchParams.requests) {
        throw new Error("Parameter `batchParams.requests` is required when calling `multipleBatch`.");
      }
      const requestPath = "/1/indexes/*/batch";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: batchParams
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Copies or moves (renames) an index within the same Algolia application.  - Existing destination indices are overwritten, except for their analytics data. - If the destination index doesn\'t exist yet, it\'ll be created.  **Copy**  - Copying a source index that doesn\'t exist creates a new index with 0 records and default settings. - The API keys of the source index are merged with the existing keys in the destination index. - You can\'t copy the `enableReRanking`, `mode`, and `replicas` settings. - You can\'t copy to a destination index that already has replicas. - Be aware of the [size limits](https://www.algolia.com/doc/guides/scaling/algolia-service-limits/#application-record-and-index-limits). - Related guide: [Copy indices](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/copy-indices/)  **Move**  - Moving a source index that doesn\'t exist is ignored without returning an error. - When moving an index, the analytics data keeps its original name, and a new set of analytics data is started for the new name.   To access the original analytics in the dashboard, create an index with the original name. - If the destination index has replicas, moving will overwrite the existing index and copy the data to the replica indices. - Related guide: [Move indices](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/move-indices/).
     *
     * Required API Key ACLs:
     *  - addObject
     * @param operationIndex - The operationIndex object.
     * @param operationIndex.indexName - Name of the index on which to perform the operation.
     * @param operationIndex.operationIndexParams - The operationIndexParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    operationIndex({ indexName, operationIndexParams }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `operationIndex`.");
      }
      if (!operationIndexParams) {
        throw new Error("Parameter `operationIndexParams` is required when calling `operationIndex`.");
      }
      if (!operationIndexParams.operation) {
        throw new Error("Parameter `operationIndexParams.operation` is required when calling `operationIndex`.");
      }
      if (!operationIndexParams.destination) {
        throw new Error("Parameter `operationIndexParams.destination` is required when calling `operationIndex`.");
      }
      const requestPath = "/1/indexes/{indexName}/operation".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: operationIndexParams
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Adds new attributes to a record, or updates existing ones.  - If a record with the specified object ID doesn\'t exist,   a new record is added to the index **if** `createIfNotExists` is true. - If the index doesn\'t exist yet, this method creates a new index. - You can use any first-level attribute but not nested attributes.   If you specify a nested attribute, the engine treats it as a replacement for its first-level ancestor.  To update an attribute without pushing the entire record, you can use these built-in operations. These operations can be helpful if you don\'t have access to your initial data.  - Increment: increment a numeric attribute - Decrement: decrement a numeric attribute - Add: append a number or string element to an array attribute - Remove: remove all matching number or string elements from an array attribute made of numbers or strings - AddUnique: add a number or string element to an array attribute made of numbers or strings only if it\'s not already present - IncrementFrom: increment a numeric integer attribute only if the provided value matches the current value, and otherwise ignore the whole object update. For example, if you pass an IncrementFrom value of 2 for the version attribute, but the current value of the attribute is 1, the engine ignores the update. If the object doesn\'t exist, the engine only creates it if you pass an IncrementFrom value of 0. - IncrementSet: increment a numeric integer attribute only if the provided value is greater than the current value, and otherwise ignore the whole object update. For example, if you pass an IncrementSet value of 2 for the version attribute, and the current value of the attribute is 1, the engine updates the object. If the object doesn\'t exist yet, the engine only creates it if you pass an IncrementSet value greater than 0.  You can specify an operation by providing an object with the attribute to update as the key and its value being an object with the following properties:  - _operation: the operation to apply on the attribute - value: the right-hand side argument to the operation, for example, increment or decrement step, value to add or remove.
     *
     * Required API Key ACLs:
     *  - addObject
     * @param partialUpdateObject - The partialUpdateObject object.
     * @param partialUpdateObject.indexName - Name of the index on which to perform the operation.
     * @param partialUpdateObject.objectID - Unique record identifier.
     * @param partialUpdateObject.attributesToUpdate - Attributes with their values.
     * @param partialUpdateObject.createIfNotExists - Whether to create a new record if it doesn\'t exist.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    partialUpdateObject({ indexName, objectID, attributesToUpdate, createIfNotExists }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `partialUpdateObject`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `partialUpdateObject`.");
      }
      if (!attributesToUpdate) {
        throw new Error("Parameter `attributesToUpdate` is required when calling `partialUpdateObject`.");
      }
      const requestPath = "/1/indexes/{indexName}/{objectID}/partial".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      if (createIfNotExists !== void 0) {
        queryParameters["createIfNotExists"] = createIfNotExists.toString();
      }
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: attributesToUpdate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a user ID and its associated data from the clusters.
     *
     * Required API Key ACLs:
     *  - admin
     * @param removeUserId - The removeUserId object.
     * @param removeUserId.userID - Unique identifier of the user who makes the search request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    removeUserId({ userID }, requestOptions) {
      if (!userID) {
        throw new Error("Parameter `userID` is required when calling `removeUserId`.");
      }
      const requestPath = "/1/clusters/mapping/{userID}".replace("{userID}", encodeURIComponent(userID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Replaces the list of allowed sources.
     *
     * Required API Key ACLs:
     *  - admin
     * @param replaceSources - The replaceSources object.
     * @param replaceSources.source - Allowed sources.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    replaceSources({ source }, requestOptions) {
      if (!source) {
        throw new Error("Parameter `source` is required when calling `replaceSources`.");
      }
      const requestPath = "/1/security/sources";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: source
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Restores a deleted API key.  Restoring resets the `validity` attribute to `0`.  Algolia stores up to 1,000 API keys per application. If you create more, the oldest API keys are deleted and can\'t be restored.
     *
     * Required API Key ACLs:
     *  - admin
     * @param restoreApiKey - The restoreApiKey object.
     * @param restoreApiKey.key - API key.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    restoreApiKey({ key }, requestOptions) {
      if (!key) {
        throw new Error("Parameter `key` is required when calling `restoreApiKey`.");
      }
      const requestPath = "/1/keys/{key}/restore".replace("{key}", encodeURIComponent(key));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Adds a record to an index or replace it.  - If the record doesn\'t have an object ID, a new record with an auto-generated object ID is added to your index. - If a record with the specified object ID exists, the existing record is replaced. - If a record with the specified object ID doesn\'t exist, a new record is added to your index. - If you add a record to an index that doesn\'t exist yet, a new index is created.  To update _some_ attributes of a record, use the [`partial` operation](#tag/Records/operation/partialUpdateObject). To add, update, or replace multiple records, use the [`batch` operation](#tag/Records/operation/batch).
     *
     * Required API Key ACLs:
     *  - addObject
     * @param saveObject - The saveObject object.
     * @param saveObject.indexName - Name of the index on which to perform the operation.
     * @param saveObject.body - The record. A schemaless object with attributes that are useful in the context of search and discovery.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    saveObject({ indexName, body }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `saveObject`.");
      }
      if (!body) {
        throw new Error("Parameter `body` is required when calling `saveObject`.");
      }
      const requestPath = "/1/indexes/{indexName}".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * If a rule with the specified object ID doesn\'t exist, it\'s created. Otherwise, the existing rule is replaced.  To create or update more than one rule, use the [`batch` operation](#tag/Rules/operation/saveRules).
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param saveRule - The saveRule object.
     * @param saveRule.indexName - Name of the index on which to perform the operation.
     * @param saveRule.objectID - Unique identifier of a rule object.
     * @param saveRule.rule - The rule object.
     * @param saveRule.forwardToReplicas - Whether changes are applied to replica indices.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    saveRule({ indexName, objectID, rule, forwardToReplicas }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `saveRule`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `saveRule`.");
      }
      if (!rule) {
        throw new Error("Parameter `rule` is required when calling `saveRule`.");
      }
      if (!rule.objectID) {
        throw new Error("Parameter `rule.objectID` is required when calling `saveRule`.");
      }
      const requestPath = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      if (forwardToReplicas !== void 0) {
        queryParameters["forwardToReplicas"] = forwardToReplicas.toString();
      }
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: rule
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Create or update multiple rules.  If a rule with the specified object ID doesn\'t exist, Algolia creates a new one. Otherwise, existing rules are replaced.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param saveRules - The saveRules object.
     * @param saveRules.indexName - Name of the index on which to perform the operation.
     * @param saveRules.rules - The rules object.
     * @param saveRules.forwardToReplicas - Whether changes are applied to replica indices.
     * @param saveRules.clearExistingRules - Whether existing rules should be deleted before adding this batch.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    saveRules({ indexName, rules, forwardToReplicas, clearExistingRules }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `saveRules`.");
      }
      if (!rules) {
        throw new Error("Parameter `rules` is required when calling `saveRules`.");
      }
      const requestPath = "/1/indexes/{indexName}/rules/batch".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      if (forwardToReplicas !== void 0) {
        queryParameters["forwardToReplicas"] = forwardToReplicas.toString();
      }
      if (clearExistingRules !== void 0) {
        queryParameters["clearExistingRules"] = clearExistingRules.toString();
      }
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: rules
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * If a synonym with the specified object ID doesn\'t exist, Algolia adds a new one. Otherwise, the existing synonym is replaced. To add multiple synonyms in a single API request, use the [`batch` operation](#tag/Synonyms/operation/saveSynonyms).
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param saveSynonym - The saveSynonym object.
     * @param saveSynonym.indexName - Name of the index on which to perform the operation.
     * @param saveSynonym.objectID - Unique identifier of a synonym object.
     * @param saveSynonym.synonymHit - The synonymHit object.
     * @param saveSynonym.forwardToReplicas - Whether changes are applied to replica indices.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    saveSynonym({ indexName, objectID, synonymHit, forwardToReplicas }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `saveSynonym`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `saveSynonym`.");
      }
      if (!synonymHit) {
        throw new Error("Parameter `synonymHit` is required when calling `saveSynonym`.");
      }
      if (!synonymHit.objectID) {
        throw new Error("Parameter `synonymHit.objectID` is required when calling `saveSynonym`.");
      }
      if (!synonymHit.type) {
        throw new Error("Parameter `synonymHit.type` is required when calling `saveSynonym`.");
      }
      const requestPath = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      if (forwardToReplicas !== void 0) {
        queryParameters["forwardToReplicas"] = forwardToReplicas.toString();
      }
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: synonymHit
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * If a synonym with the `objectID` doesn\'t exist, Algolia adds a new one. Otherwise, existing synonyms are replaced.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param saveSynonyms - The saveSynonyms object.
     * @param saveSynonyms.indexName - Name of the index on which to perform the operation.
     * @param saveSynonyms.synonymHit - The synonymHit object.
     * @param saveSynonyms.forwardToReplicas - Whether changes are applied to replica indices.
     * @param saveSynonyms.replaceExistingSynonyms - Whether to replace all synonyms in the index with the ones sent with this request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    saveSynonyms({ indexName, synonymHit, forwardToReplicas, replaceExistingSynonyms }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `saveSynonyms`.");
      }
      if (!synonymHit) {
        throw new Error("Parameter `synonymHit` is required when calling `saveSynonyms`.");
      }
      const requestPath = "/1/indexes/{indexName}/synonyms/batch".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      if (forwardToReplicas !== void 0) {
        queryParameters["forwardToReplicas"] = forwardToReplicas.toString();
      }
      if (replaceExistingSynonyms !== void 0) {
        queryParameters["replaceExistingSynonyms"] = replaceExistingSynonyms.toString();
      }
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: synonymHit
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Sends multiple search requests to one or more indices.  This can be useful in these cases:  - Different indices for different purposes, such as, one index for products, another one for marketing content. - Multiple searches to the same index—for example, with different filters.
     *
     * Required API Key ACLs:
     *  - search
     * @param searchMethodParams - Muli-search request body. Results are returned in the same order as the requests.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    search(searchMethodParams, requestOptions) {
      if (searchMethodParams && Array.isArray(searchMethodParams)) {
        const newSignatureRequest = {
          requests: searchMethodParams.map(({ params, ...legacyRequest }) => {
            if (legacyRequest.type === "facet") {
              return {
                ...legacyRequest,
                ...params,
                type: "facet"
              };
            }
            return {
              ...legacyRequest,
              ...params,
              facet: void 0,
              maxFacetHits: void 0,
              facetQuery: void 0
            };
          })
        };
        searchMethodParams = newSignatureRequest;
      }
      if (!searchMethodParams) {
        throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
      }
      if (!searchMethodParams.requests) {
        throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
      }
      const requestPath = "/1/indexes/*/queries";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchMethodParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for standard and custom dictionary entries.
     *
     * Required API Key ACLs:
     *  - settings
     * @param searchDictionaryEntries - The searchDictionaryEntries object.
     * @param searchDictionaryEntries.dictionaryName - Dictionary type in which to search.
     * @param searchDictionaryEntries.searchDictionaryEntriesParams - The searchDictionaryEntriesParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchDictionaryEntries({ dictionaryName, searchDictionaryEntriesParams }, requestOptions) {
      if (!dictionaryName) {
        throw new Error("Parameter `dictionaryName` is required when calling `searchDictionaryEntries`.");
      }
      if (!searchDictionaryEntriesParams) {
        throw new Error(
          "Parameter `searchDictionaryEntriesParams` is required when calling `searchDictionaryEntries`."
        );
      }
      if (!searchDictionaryEntriesParams.query) {
        throw new Error(
          "Parameter `searchDictionaryEntriesParams.query` is required when calling `searchDictionaryEntries`."
        );
      }
      const requestPath = "/1/dictionaries/{dictionaryName}/search".replace(
        "{dictionaryName}",
        encodeURIComponent(dictionaryName)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchDictionaryEntriesParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for values of a specified facet attribute.  - By default, facet values are sorted by decreasing count.   You can adjust this with the `sortFacetValueBy` parameter. - Searching for facet values doesn\'t work if you have **more than 65 searchable facets and searchable attributes combined**.
     *
     * Required API Key ACLs:
     *  - search
     * @param searchForFacetValues - The searchForFacetValues object.
     * @param searchForFacetValues.indexName - Name of the index on which to perform the operation.
     * @param searchForFacetValues.facetName - Facet attribute in which to search for values.  This attribute must be included in the `attributesForFaceting` index setting with the `searchable()` modifier.
     * @param searchForFacetValues.searchForFacetValuesRequest - The searchForFacetValuesRequest object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchForFacetValues({ indexName, facetName, searchForFacetValuesRequest }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `searchForFacetValues`.");
      }
      if (!facetName) {
        throw new Error("Parameter `facetName` is required when calling `searchForFacetValues`.");
      }
      const requestPath = "/1/indexes/{indexName}/facets/{facetName}/query".replace("{indexName}", encodeURIComponent(indexName)).replace("{facetName}", encodeURIComponent(facetName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchForFacetValuesRequest ? searchForFacetValuesRequest : {},
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for rules in your index.
     *
     * Required API Key ACLs:
     *  - settings
     * @param searchRules - The searchRules object.
     * @param searchRules.indexName - Name of the index on which to perform the operation.
     * @param searchRules.searchRulesParams - The searchRulesParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchRules({ indexName, searchRulesParams }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `searchRules`.");
      }
      const requestPath = "/1/indexes/{indexName}/rules/search".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchRulesParams ? searchRulesParams : {},
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches a single index and returns matching search results (_hits_).  This method lets you retrieve up to 1,000 hits. If you need more, use the [`browse` operation](#tag/Search/operation/browse) or increase the `paginatedLimitedTo` index setting.
     *
     * Required API Key ACLs:
     *  - search
     * @param searchSingleIndex - The searchSingleIndex object.
     * @param searchSingleIndex.indexName - Name of the index on which to perform the operation.
     * @param searchSingleIndex.searchParams - The searchParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchSingleIndex({ indexName, searchParams }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `searchSingleIndex`.");
      }
      const requestPath = "/1/indexes/{indexName}/query".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchParams ? searchParams : {},
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for synonyms in your index.
     *
     * Required API Key ACLs:
     *  - settings
     * @param searchSynonyms - The searchSynonyms object.
     * @param searchSynonyms.indexName - Name of the index on which to perform the operation.
     * @param searchSynonyms.searchSynonymsParams - Body of the `searchSynonyms` operation.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchSynonyms({ indexName, searchSynonymsParams }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `searchSynonyms`.");
      }
      const requestPath = "/1/indexes/{indexName}/synonyms/search".replace(
        "{indexName}",
        encodeURIComponent(indexName)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchSynonymsParams ? searchSynonymsParams : {},
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Since it can take a few seconds to get the data from the different clusters, the response isn\'t real-time.  To ensure rapid updates, the user IDs index isn\'t built at the same time as the mapping. Instead, it\'s built every 12 hours, at the same time as the update of user ID usage. For example, if you add or move a user ID, the search will show an old value until the next time the mapping is rebuilt (every 12 hours).
     *
     * Required API Key ACLs:
     *  - admin
     * @param searchUserIdsParams - The searchUserIdsParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchUserIds(searchUserIdsParams, requestOptions) {
      if (!searchUserIdsParams) {
        throw new Error("Parameter `searchUserIdsParams` is required when calling `searchUserIds`.");
      }
      if (!searchUserIdsParams.query) {
        throw new Error("Parameter `searchUserIdsParams.query` is required when calling `searchUserIds`.");
      }
      const requestPath = "/1/clusters/mapping/search";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchUserIdsParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Turns standard stop word dictionary entries on or off for a given language.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param dictionarySettingsParams - The dictionarySettingsParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    setDictionarySettings(dictionarySettingsParams, requestOptions) {
      if (!dictionarySettingsParams) {
        throw new Error("Parameter `dictionarySettingsParams` is required when calling `setDictionarySettings`.");
      }
      if (!dictionarySettingsParams.disableStandardEntries) {
        throw new Error(
          "Parameter `dictionarySettingsParams.disableStandardEntries` is required when calling `setDictionarySettings`."
        );
      }
      const requestPath = "/1/dictionaries/*/settings";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: dictionarySettingsParams
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Update the specified index settings.  Index settings that you don\'t specify are left unchanged. Specify `null` to reset a setting to its default value.  For best performance, update the index settings before you add new records to your index.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param setSettings - The setSettings object.
     * @param setSettings.indexName - Name of the index on which to perform the operation.
     * @param setSettings.indexSettings - The indexSettings object.
     * @param setSettings.forwardToReplicas - Whether changes are applied to replica indices.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    setSettings({ indexName, indexSettings, forwardToReplicas }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `setSettings`.");
      }
      if (!indexSettings) {
        throw new Error("Parameter `indexSettings` is required when calling `setSettings`.");
      }
      const requestPath = "/1/indexes/{indexName}/settings".replace("{indexName}", encodeURIComponent(indexName));
      const headers = {};
      const queryParameters = {};
      if (forwardToReplicas !== void 0) {
        queryParameters["forwardToReplicas"] = forwardToReplicas.toString();
      }
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: indexSettings
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Replaces the permissions of an existing API key.  Any unspecified attribute resets that attribute to its default value.
     *
     * Required API Key ACLs:
     *  - admin
     * @param updateApiKey - The updateApiKey object.
     * @param updateApiKey.key - API key.
     * @param updateApiKey.apiKey - The apiKey object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    updateApiKey({ key, apiKey }, requestOptions) {
      if (!key) {
        throw new Error("Parameter `key` is required when calling `updateApiKey`.");
      }
      if (!apiKey) {
        throw new Error("Parameter `apiKey` is required when calling `updateApiKey`.");
      }
      if (!apiKey.acl) {
        throw new Error("Parameter `apiKey.acl` is required when calling `updateApiKey`.");
      }
      const requestPath = "/1/keys/{key}".replace("{key}", encodeURIComponent(key));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: apiKey
      };
      return transporter.request(request, requestOptions);
    }
  };
}
function searchClient(appId, apiKey, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  return {
    ...createSearchClient({
      appId,
      apiKey,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: "Node.js", version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options
    }),
    /**
     * Helper: Generates a secured API key based on the given `parentApiKey` and given `restrictions`.
     *
     * @summary Helper: Generates a secured API key based on the given `parentApiKey` and given `restrictions`.
     * @param generateSecuredApiKey - The `generateSecuredApiKey` object.
     * @param generateSecuredApiKey.parentApiKey - The base API key from which to generate the new secured one.
     * @param generateSecuredApiKey.restrictions - A set of properties defining the restrictions of the secured API key.
     */
    generateSecuredApiKey: ({ parentApiKey, restrictions = {} }) => {
      let mergedRestrictions = restrictions;
      if (restrictions.searchParams) {
        mergedRestrictions = {
          ...restrictions,
          ...restrictions.searchParams
        };
        delete mergedRestrictions.searchParams;
      }
      mergedRestrictions = Object.keys(mergedRestrictions).sort().reduce(
        (acc, key) => {
          acc[key] = mergedRestrictions[key];
          return acc;
        },
        {}
      );
      const queryParameters = serializeQueryParameters(mergedRestrictions);
      return Buffer.from(
        createHmac("sha256", parentApiKey).update(queryParameters).digest("hex") + queryParameters
      ).toString("base64");
    },
    /**
     * Helper: Retrieves the remaining validity of the previous generated `securedApiKey`, the `ValidUntil` parameter must have been provided.
     *
     * @summary Helper: Retrieves the remaining validity of the previous generated `secured_api_key`, the `ValidUntil` parameter must have been provided.
     * @param getSecuredApiKeyRemainingValidity - The `getSecuredApiKeyRemainingValidity` object.
     * @param getSecuredApiKeyRemainingValidity.securedApiKey - The secured API key generated with the `generateSecuredApiKey` method.
     */
    getSecuredApiKeyRemainingValidity: ({ securedApiKey }) => {
      const decodedString = Buffer.from(securedApiKey, "base64").toString("ascii");
      const regex = /validUntil=(\d+)/;
      const match = decodedString.match(regex);
      if (match === null) {
        throw new Error("validUntil not found in given secured api key.");
      }
      return parseInt(match[1], 10) - Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
    }
  };
}

var client_search_star = /*#__PURE__*/Object.freeze({
  __proto__: null,
  apiClientVersion: apiClientVersion$3,
  searchClient: searchClient
});

// builds/node.ts
var apiClientVersion$2 = "1.13.0";
var REGIONS = ["eu", "us"];
function getDefaultHosts$2(region) {
  const url = "data.{region}.algolia.com".replace("{region}", region);
  return [{ url, accept: "readWrite", protocol: "https" }];
}
function isOnDemandTrigger(trigger) {
  return trigger.type === "onDemand";
}
function isScheduleTrigger(trigger) {
  return trigger.type === "schedule";
}
function isSubscriptionTrigger(trigger) {
  return trigger.type === "subscription";
}
function createIngestionClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  region: regionOption,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts$2(regionOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Ingestion",
      version: apiClientVersion$2
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * Creates a new authentication resource.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param authenticationCreate -
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    createAuthentication(authenticationCreate, requestOptions) {
      if (!authenticationCreate) {
        throw new Error("Parameter `authenticationCreate` is required when calling `createAuthentication`.");
      }
      if (!authenticationCreate.type) {
        throw new Error("Parameter `authenticationCreate.type` is required when calling `createAuthentication`.");
      }
      if (!authenticationCreate.name) {
        throw new Error("Parameter `authenticationCreate.name` is required when calling `createAuthentication`.");
      }
      if (!authenticationCreate.input) {
        throw new Error("Parameter `authenticationCreate.input` is required when calling `createAuthentication`.");
      }
      const requestPath = "/1/authentications";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: authenticationCreate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Creates a new destination.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param destinationCreate -
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    createDestination(destinationCreate, requestOptions) {
      if (!destinationCreate) {
        throw new Error("Parameter `destinationCreate` is required when calling `createDestination`.");
      }
      if (!destinationCreate.type) {
        throw new Error("Parameter `destinationCreate.type` is required when calling `createDestination`.");
      }
      if (!destinationCreate.name) {
        throw new Error("Parameter `destinationCreate.name` is required when calling `createDestination`.");
      }
      if (!destinationCreate.input) {
        throw new Error("Parameter `destinationCreate.input` is required when calling `createDestination`.");
      }
      const requestPath = "/1/destinations";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: destinationCreate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Creates a new source.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param sourceCreate -
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    createSource(sourceCreate, requestOptions) {
      if (!sourceCreate) {
        throw new Error("Parameter `sourceCreate` is required when calling `createSource`.");
      }
      if (!sourceCreate.type) {
        throw new Error("Parameter `sourceCreate.type` is required when calling `createSource`.");
      }
      if (!sourceCreate.name) {
        throw new Error("Parameter `sourceCreate.name` is required when calling `createSource`.");
      }
      const requestPath = "/1/sources";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: sourceCreate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Creates a new task.
     * @param taskCreate - Request body for creating a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    createTask(taskCreate, requestOptions) {
      if (!taskCreate) {
        throw new Error("Parameter `taskCreate` is required when calling `createTask`.");
      }
      if (!taskCreate.sourceID) {
        throw new Error("Parameter `taskCreate.sourceID` is required when calling `createTask`.");
      }
      if (!taskCreate.destinationID) {
        throw new Error("Parameter `taskCreate.destinationID` is required when calling `createTask`.");
      }
      if (!taskCreate.action) {
        throw new Error("Parameter `taskCreate.action` is required when calling `createTask`.");
      }
      const requestPath = "/2/tasks";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: taskCreate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Creates a new task using the v1 endpoint, please use `createTask` instead.
     * @param taskCreate - Request body for creating a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    createTaskV1(taskCreate, requestOptions) {
      if (!taskCreate) {
        throw new Error("Parameter `taskCreate` is required when calling `createTaskV1`.");
      }
      if (!taskCreate.sourceID) {
        throw new Error("Parameter `taskCreate.sourceID` is required when calling `createTaskV1`.");
      }
      if (!taskCreate.destinationID) {
        throw new Error("Parameter `taskCreate.destinationID` is required when calling `createTaskV1`.");
      }
      if (!taskCreate.trigger) {
        throw new Error("Parameter `taskCreate.trigger` is required when calling `createTaskV1`.");
      }
      if (!taskCreate.action) {
        throw new Error("Parameter `taskCreate.action` is required when calling `createTaskV1`.");
      }
      const requestPath = "/1/tasks";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: taskCreate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Creates a new transformation.
     * @param transformationCreate - Request body for creating a transformation.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    createTransformation(transformationCreate, requestOptions) {
      if (!transformationCreate) {
        throw new Error("Parameter `transformationCreate` is required when calling `createTransformation`.");
      }
      if (!transformationCreate.code) {
        throw new Error("Parameter `transformationCreate.code` is required when calling `createTransformation`.");
      }
      if (!transformationCreate.name) {
        throw new Error("Parameter `transformationCreate.name` is required when calling `createTransformation`.");
      }
      const requestPath = "/1/transformations";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: transformationCreate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customDelete`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customGet`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPut`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes an authentication resource. You can\'t delete authentication resources that are used by a source or a destination.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param deleteAuthentication - The deleteAuthentication object.
     * @param deleteAuthentication.authenticationID - Unique identifier of an authentication resource.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteAuthentication({ authenticationID }, requestOptions) {
      if (!authenticationID) {
        throw new Error("Parameter `authenticationID` is required when calling `deleteAuthentication`.");
      }
      const requestPath = "/1/authentications/{authenticationID}".replace(
        "{authenticationID}",
        encodeURIComponent(authenticationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a destination by its ID. You can\'t delete destinations that are referenced in tasks.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param deleteDestination - The deleteDestination object.
     * @param deleteDestination.destinationID - Unique identifier of a destination.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteDestination({ destinationID }, requestOptions) {
      if (!destinationID) {
        throw new Error("Parameter `destinationID` is required when calling `deleteDestination`.");
      }
      const requestPath = "/1/destinations/{destinationID}".replace(
        "{destinationID}",
        encodeURIComponent(destinationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a source by its ID. You can\'t delete sources that are referenced in tasks.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param deleteSource - The deleteSource object.
     * @param deleteSource.sourceID - Unique identifier of a source.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteSource({ sourceID }, requestOptions) {
      if (!sourceID) {
        throw new Error("Parameter `sourceID` is required when calling `deleteSource`.");
      }
      const requestPath = "/1/sources/{sourceID}".replace("{sourceID}", encodeURIComponent(sourceID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a task by its ID.
     * @param deleteTask - The deleteTask object.
     * @param deleteTask.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteTask({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `deleteTask`.");
      }
      const requestPath = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a task by its ID using the v1 endpoint, please use `deleteTask` instead.
     * @param deleteTaskV1 - The deleteTaskV1 object.
     * @param deleteTaskV1.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteTaskV1({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `deleteTaskV1`.");
      }
      const requestPath = "/1/tasks/{taskID}".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a transformation by its ID.
     * @param deleteTransformation - The deleteTransformation object.
     * @param deleteTransformation.transformationID - Unique identifier of a transformation.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteTransformation({ transformationID }, requestOptions) {
      if (!transformationID) {
        throw new Error("Parameter `transformationID` is required when calling `deleteTransformation`.");
      }
      const requestPath = "/1/transformations/{transformationID}".replace(
        "{transformationID}",
        encodeURIComponent(transformationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Disables a task.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param disableTask - The disableTask object.
     * @param disableTask.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    disableTask({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `disableTask`.");
      }
      const requestPath = "/2/tasks/{taskID}/disable".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Disables a task using the v1 endpoint, please use `disableTask` instead.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param disableTaskV1 - The disableTaskV1 object.
     * @param disableTaskV1.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    disableTaskV1({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `disableTaskV1`.");
      }
      const requestPath = "/1/tasks/{taskID}/disable".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Enables a task.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param enableTask - The enableTask object.
     * @param enableTask.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    enableTask({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `enableTask`.");
      }
      const requestPath = "/2/tasks/{taskID}/enable".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Enables a task using the v1 endpoint, please use `enableTask` instead.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param enableTaskV1 - The enableTaskV1 object.
     * @param enableTaskV1.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    enableTaskV1({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `enableTaskV1`.");
      }
      const requestPath = "/1/tasks/{taskID}/enable".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves an authentication resource by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param getAuthentication - The getAuthentication object.
     * @param getAuthentication.authenticationID - Unique identifier of an authentication resource.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getAuthentication({ authenticationID }, requestOptions) {
      if (!authenticationID) {
        throw new Error("Parameter `authenticationID` is required when calling `getAuthentication`.");
      }
      const requestPath = "/1/authentications/{authenticationID}".replace(
        "{authenticationID}",
        encodeURIComponent(authenticationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a destination by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param getDestination - The getDestination object.
     * @param getDestination.destinationID - Unique identifier of a destination.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getDestination({ destinationID }, requestOptions) {
      if (!destinationID) {
        throw new Error("Parameter `destinationID` is required when calling `getDestination`.");
      }
      const requestPath = "/1/destinations/{destinationID}".replace(
        "{destinationID}",
        encodeURIComponent(destinationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a single task run event by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param getEvent - The getEvent object.
     * @param getEvent.runID - Unique identifier of a task run.
     * @param getEvent.eventID - Unique identifier of an event.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getEvent({ runID, eventID }, requestOptions) {
      if (!runID) {
        throw new Error("Parameter `runID` is required when calling `getEvent`.");
      }
      if (!eventID) {
        throw new Error("Parameter `eventID` is required when calling `getEvent`.");
      }
      const requestPath = "/1/runs/{runID}/events/{eventID}".replace("{runID}", encodeURIComponent(runID)).replace("{eventID}", encodeURIComponent(eventID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieve a single task run by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param getRun - The getRun object.
     * @param getRun.runID - Unique identifier of a task run.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRun({ runID }, requestOptions) {
      if (!runID) {
        throw new Error("Parameter `runID` is required when calling `getRun`.");
      }
      const requestPath = "/1/runs/{runID}".replace("{runID}", encodeURIComponent(runID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieve a source by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param getSource - The getSource object.
     * @param getSource.sourceID - Unique identifier of a source.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getSource({ sourceID }, requestOptions) {
      if (!sourceID) {
        throw new Error("Parameter `sourceID` is required when calling `getSource`.");
      }
      const requestPath = "/1/sources/{sourceID}".replace("{sourceID}", encodeURIComponent(sourceID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a task by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param getTask - The getTask object.
     * @param getTask.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTask({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `getTask`.");
      }
      const requestPath = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a task by its ID using the v1 endpoint, please use `getTask` instead.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param getTaskV1 - The getTaskV1 object.
     * @param getTaskV1.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTaskV1({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `getTaskV1`.");
      }
      const requestPath = "/1/tasks/{taskID}".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a transformation by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param getTransformation - The getTransformation object.
     * @param getTransformation.transformationID - Unique identifier of a transformation.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getTransformation({ transformationID }, requestOptions) {
      if (!transformationID) {
        throw new Error("Parameter `transformationID` is required when calling `getTransformation`.");
      }
      const requestPath = "/1/transformations/{transformationID}".replace(
        "{transformationID}",
        encodeURIComponent(transformationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a list of all authentication resources.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param listAuthentications - The listAuthentications object.
     * @param listAuthentications.itemsPerPage - Number of items per page.
     * @param listAuthentications.page - Page number of the paginated API response.
     * @param listAuthentications.type - Type of authentication resource to retrieve.
     * @param listAuthentications.platform - Ecommerce platform for which to retrieve authentications.
     * @param listAuthentications.sort - Property by which to sort the list of authentications.
     * @param listAuthentications.order - Sort order of the response, ascending or descending.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listAuthentications({ itemsPerPage, page, type, platform, sort, order } = {}, requestOptions = void 0) {
      const requestPath = "/1/authentications";
      const headers = {};
      const queryParameters = {};
      if (itemsPerPage !== void 0) {
        queryParameters["itemsPerPage"] = itemsPerPage.toString();
      }
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (type !== void 0) {
        queryParameters["type"] = type.toString();
      }
      if (platform !== void 0) {
        queryParameters["platform"] = platform.toString();
      }
      if (sort !== void 0) {
        queryParameters["sort"] = sort.toString();
      }
      if (order !== void 0) {
        queryParameters["order"] = order.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a list of destinations.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param listDestinations - The listDestinations object.
     * @param listDestinations.itemsPerPage - Number of items per page.
     * @param listDestinations.page - Page number of the paginated API response.
     * @param listDestinations.type - Destination type.
     * @param listDestinations.authenticationID - Authentication ID used by destinations.
     * @param listDestinations.transformationID - Get the list of destinations used by a transformation.
     * @param listDestinations.sort - Property by which to sort the destinations.
     * @param listDestinations.order - Sort order of the response, ascending or descending.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listDestinations({ itemsPerPage, page, type, authenticationID, transformationID, sort, order } = {}, requestOptions = void 0) {
      const requestPath = "/1/destinations";
      const headers = {};
      const queryParameters = {};
      if (itemsPerPage !== void 0) {
        queryParameters["itemsPerPage"] = itemsPerPage.toString();
      }
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (type !== void 0) {
        queryParameters["type"] = type.toString();
      }
      if (authenticationID !== void 0) {
        queryParameters["authenticationID"] = authenticationID.toString();
      }
      if (transformationID !== void 0) {
        queryParameters["transformationID"] = transformationID.toString();
      }
      if (sort !== void 0) {
        queryParameters["sort"] = sort.toString();
      }
      if (order !== void 0) {
        queryParameters["order"] = order.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a list of events for a task run, identified by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param listEvents - The listEvents object.
     * @param listEvents.runID - Unique identifier of a task run.
     * @param listEvents.itemsPerPage - Number of items per page.
     * @param listEvents.page - Page number of the paginated API response.
     * @param listEvents.status - Event status for filtering the list of task runs.
     * @param listEvents.type - Event type for filtering the list of task runs.
     * @param listEvents.sort - Property by which to sort the list of task run events.
     * @param listEvents.order - Sort order of the response, ascending or descending.
     * @param listEvents.startDate - Date and time in RFC 3339 format for the earliest events to retrieve. By default, the current time minus three hours is used.
     * @param listEvents.endDate - Date and time in RFC 3339 format for the latest events to retrieve. By default, the current time is used.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listEvents({ runID, itemsPerPage, page, status, type, sort, order, startDate, endDate }, requestOptions) {
      if (!runID) {
        throw new Error("Parameter `runID` is required when calling `listEvents`.");
      }
      const requestPath = "/1/runs/{runID}/events".replace("{runID}", encodeURIComponent(runID));
      const headers = {};
      const queryParameters = {};
      if (itemsPerPage !== void 0) {
        queryParameters["itemsPerPage"] = itemsPerPage.toString();
      }
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (status !== void 0) {
        queryParameters["status"] = status.toString();
      }
      if (type !== void 0) {
        queryParameters["type"] = type.toString();
      }
      if (sort !== void 0) {
        queryParameters["sort"] = sort.toString();
      }
      if (order !== void 0) {
        queryParameters["order"] = order.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieve a list of task runs.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param listRuns - The listRuns object.
     * @param listRuns.itemsPerPage - Number of items per page.
     * @param listRuns.page - Page number of the paginated API response.
     * @param listRuns.status - Run status for filtering the list of task runs.
     * @param listRuns.type - Run type for filtering the list of task runs.
     * @param listRuns.taskID - Task ID for filtering the list of task runs.
     * @param listRuns.sort - Property by which to sort the list of task runs.
     * @param listRuns.order - Sort order of the response, ascending or descending.
     * @param listRuns.startDate - Date in RFC 3339 format for the earliest run to retrieve. By default, the current day minus seven days is used.
     * @param listRuns.endDate - Date in RFC 3339 format for the latest run to retrieve. By default, the current day is used.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listRuns({ itemsPerPage, page, status, type, taskID, sort, order, startDate, endDate } = {}, requestOptions = void 0) {
      const requestPath = "/1/runs";
      const headers = {};
      const queryParameters = {};
      if (itemsPerPage !== void 0) {
        queryParameters["itemsPerPage"] = itemsPerPage.toString();
      }
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (status !== void 0) {
        queryParameters["status"] = status.toString();
      }
      if (type !== void 0) {
        queryParameters["type"] = type.toString();
      }
      if (taskID !== void 0) {
        queryParameters["taskID"] = taskID.toString();
      }
      if (sort !== void 0) {
        queryParameters["sort"] = sort.toString();
      }
      if (order !== void 0) {
        queryParameters["order"] = order.toString();
      }
      if (startDate !== void 0) {
        queryParameters["startDate"] = startDate.toString();
      }
      if (endDate !== void 0) {
        queryParameters["endDate"] = endDate.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a list of sources.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param listSources - The listSources object.
     * @param listSources.itemsPerPage - Number of items per page.
     * @param listSources.page - Page number of the paginated API response.
     * @param listSources.type - Source type. Some sources require authentication.
     * @param listSources.authenticationID - Authentication IDs of the sources to retrieve. \'none\' returns sources that doesn\'t have an authentication.
     * @param listSources.sort - Property by which to sort the list of sources.
     * @param listSources.order - Sort order of the response, ascending or descending.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listSources({ itemsPerPage, page, type, authenticationID, sort, order } = {}, requestOptions = void 0) {
      const requestPath = "/1/sources";
      const headers = {};
      const queryParameters = {};
      if (itemsPerPage !== void 0) {
        queryParameters["itemsPerPage"] = itemsPerPage.toString();
      }
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (type !== void 0) {
        queryParameters["type"] = type.toString();
      }
      if (authenticationID !== void 0) {
        queryParameters["authenticationID"] = authenticationID.toString();
      }
      if (sort !== void 0) {
        queryParameters["sort"] = sort.toString();
      }
      if (order !== void 0) {
        queryParameters["order"] = order.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a list of tasks.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param listTasks - The listTasks object.
     * @param listTasks.itemsPerPage - Number of items per page.
     * @param listTasks.page - Page number of the paginated API response.
     * @param listTasks.action - Actions for filtering the list of tasks.
     * @param listTasks.enabled - Whether to filter the list of tasks by the `enabled` status.
     * @param listTasks.sourceID - Source IDs for filtering the list of tasks.
     * @param listTasks.destinationID - Destination IDs for filtering the list of tasks.
     * @param listTasks.triggerType - Type of task trigger for filtering the list of tasks.
     * @param listTasks.sort - Property by which to sort the list of tasks.
     * @param listTasks.order - Sort order of the response, ascending or descending.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listTasks({ itemsPerPage, page, action, enabled, sourceID, destinationID, triggerType, sort, order } = {}, requestOptions = void 0) {
      const requestPath = "/2/tasks";
      const headers = {};
      const queryParameters = {};
      if (itemsPerPage !== void 0) {
        queryParameters["itemsPerPage"] = itemsPerPage.toString();
      }
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (action !== void 0) {
        queryParameters["action"] = action.toString();
      }
      if (enabled !== void 0) {
        queryParameters["enabled"] = enabled.toString();
      }
      if (sourceID !== void 0) {
        queryParameters["sourceID"] = sourceID.toString();
      }
      if (destinationID !== void 0) {
        queryParameters["destinationID"] = destinationID.toString();
      }
      if (triggerType !== void 0) {
        queryParameters["triggerType"] = triggerType.toString();
      }
      if (sort !== void 0) {
        queryParameters["sort"] = sort.toString();
      }
      if (order !== void 0) {
        queryParameters["order"] = order.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a list of tasks using the v1 endpoint, please use `getTasks` instead.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param listTasksV1 - The listTasksV1 object.
     * @param listTasksV1.itemsPerPage - Number of items per page.
     * @param listTasksV1.page - Page number of the paginated API response.
     * @param listTasksV1.action - Actions for filtering the list of tasks.
     * @param listTasksV1.enabled - Whether to filter the list of tasks by the `enabled` status.
     * @param listTasksV1.sourceID - Source IDs for filtering the list of tasks.
     * @param listTasksV1.destinationID - Destination IDs for filtering the list of tasks.
     * @param listTasksV1.triggerType - Type of task trigger for filtering the list of tasks.
     * @param listTasksV1.sort - Property by which to sort the list of tasks.
     * @param listTasksV1.order - Sort order of the response, ascending or descending.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listTasksV1({ itemsPerPage, page, action, enabled, sourceID, destinationID, triggerType, sort, order } = {}, requestOptions = void 0) {
      const requestPath = "/1/tasks";
      const headers = {};
      const queryParameters = {};
      if (itemsPerPage !== void 0) {
        queryParameters["itemsPerPage"] = itemsPerPage.toString();
      }
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (action !== void 0) {
        queryParameters["action"] = action.toString();
      }
      if (enabled !== void 0) {
        queryParameters["enabled"] = enabled.toString();
      }
      if (sourceID !== void 0) {
        queryParameters["sourceID"] = sourceID.toString();
      }
      if (destinationID !== void 0) {
        queryParameters["destinationID"] = destinationID.toString();
      }
      if (triggerType !== void 0) {
        queryParameters["triggerType"] = triggerType.toString();
      }
      if (sort !== void 0) {
        queryParameters["sort"] = sort.toString();
      }
      if (order !== void 0) {
        queryParameters["order"] = order.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a list of transformations.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param listTransformations - The listTransformations object.
     * @param listTransformations.itemsPerPage - Number of items per page.
     * @param listTransformations.page - Page number of the paginated API response.
     * @param listTransformations.sort - Property by which to sort the list of transformations.
     * @param listTransformations.order - Sort order of the response, ascending or descending.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    listTransformations({ itemsPerPage, page, sort, order } = {}, requestOptions = void 0) {
      const requestPath = "/1/transformations";
      const headers = {};
      const queryParameters = {};
      if (itemsPerPage !== void 0) {
        queryParameters["itemsPerPage"] = itemsPerPage.toString();
      }
      if (page !== void 0) {
        queryParameters["page"] = page.toString();
      }
      if (sort !== void 0) {
        queryParameters["sort"] = sort.toString();
      }
      if (order !== void 0) {
        queryParameters["order"] = order.toString();
      }
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Push a `batch` request payload through the Pipeline. You can check the status of task pushes with the observability endpoints.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param pushTask - The pushTask object.
     * @param pushTask.taskID - Unique identifier of a task.
     * @param pushTask.pushTaskPayload - Request body of a Search API `batch` request that will be pushed in the Connectors pipeline.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    pushTask({ taskID, pushTaskPayload }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `pushTask`.");
      }
      if (!pushTaskPayload) {
        throw new Error("Parameter `pushTaskPayload` is required when calling `pushTask`.");
      }
      if (!pushTaskPayload.action) {
        throw new Error("Parameter `pushTaskPayload.action` is required when calling `pushTask`.");
      }
      if (!pushTaskPayload.records) {
        throw new Error("Parameter `pushTaskPayload.records` is required when calling `pushTask`.");
      }
      const requestPath = "/2/tasks/{taskID}/push".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: pushTaskPayload
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Runs all tasks linked to a source, only available for Shopify sources. It will create 1 run per task.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param runSource - The runSource object.
     * @param runSource.sourceID - Unique identifier of a source.
     * @param runSource.runSourcePayload -
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    runSource({ sourceID, runSourcePayload }, requestOptions) {
      if (!sourceID) {
        throw new Error("Parameter `sourceID` is required when calling `runSource`.");
      }
      const requestPath = "/1/sources/{sourceID}/run".replace("{sourceID}", encodeURIComponent(sourceID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: runSourcePayload ? runSourcePayload : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Runs a task. You can check the status of task runs with the observability endpoints.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param runTask - The runTask object.
     * @param runTask.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    runTask({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `runTask`.");
      }
      const requestPath = "/2/tasks/{taskID}/run".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Runs a task using the v1 endpoint, please use `runTask` instead. You can check the status of task runs with the observability endpoints.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param runTaskV1 - The runTaskV1 object.
     * @param runTaskV1.taskID - Unique identifier of a task.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    runTaskV1({ taskID }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `runTaskV1`.");
      }
      const requestPath = "/1/tasks/{taskID}/run".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for authentication resources.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param authenticationSearch - The authenticationSearch object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchAuthentications(authenticationSearch, requestOptions) {
      if (!authenticationSearch) {
        throw new Error("Parameter `authenticationSearch` is required when calling `searchAuthentications`.");
      }
      if (!authenticationSearch.authenticationIDs) {
        throw new Error(
          "Parameter `authenticationSearch.authenticationIDs` is required when calling `searchAuthentications`."
        );
      }
      const requestPath = "/1/authentications/search";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: authenticationSearch
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for destinations.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param destinationSearch - The destinationSearch object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchDestinations(destinationSearch, requestOptions) {
      if (!destinationSearch) {
        throw new Error("Parameter `destinationSearch` is required when calling `searchDestinations`.");
      }
      if (!destinationSearch.destinationIDs) {
        throw new Error("Parameter `destinationSearch.destinationIDs` is required when calling `searchDestinations`.");
      }
      const requestPath = "/1/destinations/search";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: destinationSearch
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for sources.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param sourceSearch - The sourceSearch object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchSources(sourceSearch, requestOptions) {
      if (!sourceSearch) {
        throw new Error("Parameter `sourceSearch` is required when calling `searchSources`.");
      }
      if (!sourceSearch.sourceIDs) {
        throw new Error("Parameter `sourceSearch.sourceIDs` is required when calling `searchSources`.");
      }
      const requestPath = "/1/sources/search";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: sourceSearch
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for tasks.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param taskSearch - The taskSearch object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchTasks(taskSearch, requestOptions) {
      if (!taskSearch) {
        throw new Error("Parameter `taskSearch` is required when calling `searchTasks`.");
      }
      if (!taskSearch.taskIDs) {
        throw new Error("Parameter `taskSearch.taskIDs` is required when calling `searchTasks`.");
      }
      const requestPath = "/2/tasks/search";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: taskSearch
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for tasks using the v1 endpoint, please use `searchTasks` instead.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param taskSearch - The taskSearch object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchTasksV1(taskSearch, requestOptions) {
      if (!taskSearch) {
        throw new Error("Parameter `taskSearch` is required when calling `searchTasksV1`.");
      }
      if (!taskSearch.taskIDs) {
        throw new Error("Parameter `taskSearch.taskIDs` is required when calling `searchTasksV1`.");
      }
      const requestPath = "/1/tasks/search";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: taskSearch
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for transformations.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param transformationSearch - The transformationSearch object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchTransformations(transformationSearch, requestOptions) {
      if (!transformationSearch) {
        throw new Error("Parameter `transformationSearch` is required when calling `searchTransformations`.");
      }
      if (!transformationSearch.transformationIDs) {
        throw new Error(
          "Parameter `transformationSearch.transformationIDs` is required when calling `searchTransformations`."
        );
      }
      const requestPath = "/1/transformations/search";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: transformationSearch
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Triggers a stream-listing request for a source. Triggering stream-listing requests only works with sources with `type: docker` and `imageType: singer`.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param triggerDockerSourceDiscover - The triggerDockerSourceDiscover object.
     * @param triggerDockerSourceDiscover.sourceID - Unique identifier of a source.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    triggerDockerSourceDiscover({ sourceID }, requestOptions) {
      if (!sourceID) {
        throw new Error("Parameter `sourceID` is required when calling `triggerDockerSourceDiscover`.");
      }
      const requestPath = "/1/sources/{sourceID}/discover".replace("{sourceID}", encodeURIComponent(sourceID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Try a transformation before creating it.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param transformationTry - The transformationTry object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    tryTransformation(transformationTry, requestOptions) {
      if (!transformationTry) {
        throw new Error("Parameter `transformationTry` is required when calling `tryTransformation`.");
      }
      if (!transformationTry.code) {
        throw new Error("Parameter `transformationTry.code` is required when calling `tryTransformation`.");
      }
      if (!transformationTry.sampleRecord) {
        throw new Error("Parameter `transformationTry.sampleRecord` is required when calling `tryTransformation`.");
      }
      const requestPath = "/1/transformations/try";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: transformationTry
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Try a transformation before updating it.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param tryTransformationBeforeUpdate - The tryTransformationBeforeUpdate object.
     * @param tryTransformationBeforeUpdate.transformationID - Unique identifier of a transformation.
     * @param tryTransformationBeforeUpdate.transformationTry - The transformationTry object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    tryTransformationBeforeUpdate({ transformationID, transformationTry }, requestOptions) {
      if (!transformationID) {
        throw new Error("Parameter `transformationID` is required when calling `tryTransformationBeforeUpdate`.");
      }
      if (!transformationTry) {
        throw new Error("Parameter `transformationTry` is required when calling `tryTransformationBeforeUpdate`.");
      }
      if (!transformationTry.code) {
        throw new Error("Parameter `transformationTry.code` is required when calling `tryTransformationBeforeUpdate`.");
      }
      if (!transformationTry.sampleRecord) {
        throw new Error(
          "Parameter `transformationTry.sampleRecord` is required when calling `tryTransformationBeforeUpdate`."
        );
      }
      const requestPath = "/1/transformations/{transformationID}/try".replace(
        "{transformationID}",
        encodeURIComponent(transformationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: transformationTry
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Updates an authentication resource.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param updateAuthentication - The updateAuthentication object.
     * @param updateAuthentication.authenticationID - Unique identifier of an authentication resource.
     * @param updateAuthentication.authenticationUpdate - The authenticationUpdate object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    updateAuthentication({ authenticationID, authenticationUpdate }, requestOptions) {
      if (!authenticationID) {
        throw new Error("Parameter `authenticationID` is required when calling `updateAuthentication`.");
      }
      if (!authenticationUpdate) {
        throw new Error("Parameter `authenticationUpdate` is required when calling `updateAuthentication`.");
      }
      const requestPath = "/1/authentications/{authenticationID}".replace(
        "{authenticationID}",
        encodeURIComponent(authenticationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PATCH",
        path: requestPath,
        queryParameters,
        headers,
        data: authenticationUpdate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Updates the destination by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param updateDestination - The updateDestination object.
     * @param updateDestination.destinationID - Unique identifier of a destination.
     * @param updateDestination.destinationUpdate - The destinationUpdate object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    updateDestination({ destinationID, destinationUpdate }, requestOptions) {
      if (!destinationID) {
        throw new Error("Parameter `destinationID` is required when calling `updateDestination`.");
      }
      if (!destinationUpdate) {
        throw new Error("Parameter `destinationUpdate` is required when calling `updateDestination`.");
      }
      const requestPath = "/1/destinations/{destinationID}".replace(
        "{destinationID}",
        encodeURIComponent(destinationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PATCH",
        path: requestPath,
        queryParameters,
        headers,
        data: destinationUpdate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Updates a source by its ID.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param updateSource - The updateSource object.
     * @param updateSource.sourceID - Unique identifier of a source.
     * @param updateSource.sourceUpdate - The sourceUpdate object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    updateSource({ sourceID, sourceUpdate }, requestOptions) {
      if (!sourceID) {
        throw new Error("Parameter `sourceID` is required when calling `updateSource`.");
      }
      if (!sourceUpdate) {
        throw new Error("Parameter `sourceUpdate` is required when calling `updateSource`.");
      }
      const requestPath = "/1/sources/{sourceID}".replace("{sourceID}", encodeURIComponent(sourceID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PATCH",
        path: requestPath,
        queryParameters,
        headers,
        data: sourceUpdate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Updates a task by its ID.
     * @param updateTask - The updateTask object.
     * @param updateTask.taskID - Unique identifier of a task.
     * @param updateTask.taskUpdate - The taskUpdate object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    updateTask({ taskID, taskUpdate }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `updateTask`.");
      }
      if (!taskUpdate) {
        throw new Error("Parameter `taskUpdate` is required when calling `updateTask`.");
      }
      const requestPath = "/2/tasks/{taskID}".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PATCH",
        path: requestPath,
        queryParameters,
        headers,
        data: taskUpdate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Updates a task by its ID using the v1 endpoint, please use `updateTask` instead.
     * @param updateTaskV1 - The updateTaskV1 object.
     * @param updateTaskV1.taskID - Unique identifier of a task.
     * @param updateTaskV1.taskUpdate - The taskUpdate object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    updateTaskV1({ taskID, taskUpdate }, requestOptions) {
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `updateTaskV1`.");
      }
      if (!taskUpdate) {
        throw new Error("Parameter `taskUpdate` is required when calling `updateTaskV1`.");
      }
      const requestPath = "/1/tasks/{taskID}".replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PATCH",
        path: requestPath,
        queryParameters,
        headers,
        data: taskUpdate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Updates a transformation by its ID.
     * @param updateTransformation - The updateTransformation object.
     * @param updateTransformation.transformationID - Unique identifier of a transformation.
     * @param updateTransformation.transformationCreate - The transformationCreate object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    updateTransformation({ transformationID, transformationCreate }, requestOptions) {
      if (!transformationID) {
        throw new Error("Parameter `transformationID` is required when calling `updateTransformation`.");
      }
      if (!transformationCreate) {
        throw new Error("Parameter `transformationCreate` is required when calling `updateTransformation`.");
      }
      if (!transformationCreate.code) {
        throw new Error("Parameter `transformationCreate.code` is required when calling `updateTransformation`.");
      }
      if (!transformationCreate.name) {
        throw new Error("Parameter `transformationCreate.name` is required when calling `updateTransformation`.");
      }
      const requestPath = "/1/transformations/{transformationID}".replace(
        "{transformationID}",
        encodeURIComponent(transformationID)
      );
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: transformationCreate
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Validates a source payload to ensure it can be created and that the data source can be reached by Algolia.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param sourceCreate -
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    validateSource(sourceCreate, requestOptions = void 0) {
      const requestPath = "/1/sources/validate";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: sourceCreate ? sourceCreate : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Validates an update of a source payload to ensure it can be created and that the data source can be reached by Algolia.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param validateSourceBeforeUpdate - The validateSourceBeforeUpdate object.
     * @param validateSourceBeforeUpdate.sourceID - Unique identifier of a source.
     * @param validateSourceBeforeUpdate.sourceUpdate - The sourceUpdate object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    validateSourceBeforeUpdate({ sourceID, sourceUpdate }, requestOptions) {
      if (!sourceID) {
        throw new Error("Parameter `sourceID` is required when calling `validateSourceBeforeUpdate`.");
      }
      if (!sourceUpdate) {
        throw new Error("Parameter `sourceUpdate` is required when calling `validateSourceBeforeUpdate`.");
      }
      const requestPath = "/1/sources/{sourceID}/validate".replace("{sourceID}", encodeURIComponent(sourceID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: sourceUpdate
      };
      return transporter.request(request, requestOptions);
    }
  };
}

// builds/node.ts
function ingestionClient(appId, apiKey, region, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  if (!region || region && (typeof region !== "string" || !REGIONS.includes(region))) {
    throw new Error(`\`region\` is required and must be one of the following: ${REGIONS.join(", ")}`);
  }
  return {
    ...createIngestionClient({
      appId,
      apiKey,
      region,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: "Node.js", version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options
    })
  };
}

var ingestion_star = /*#__PURE__*/Object.freeze({
  __proto__: null,
  apiClientVersion: apiClientVersion$2,
  ingestionClient: ingestionClient,
  isOnDemandTrigger: isOnDemandTrigger,
  isScheduleTrigger: isScheduleTrigger,
  isSubscriptionTrigger: isSubscriptionTrigger
});

// builds/node.ts
var apiClientVersion$1 = "1.13.0";
function getDefaultHosts$1() {
  return [{ url: "status.algolia.com", accept: "readWrite", protocol: "https" }];
}
function createMonitoringClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts$1(),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Monitoring",
      version: apiClientVersion$1
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customDelete`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customGet`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPut`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves known incidents for the selected clusters.
     * @param getClusterIncidents - The getClusterIncidents object.
     * @param getClusterIncidents.clusters - Subset of clusters, separated by commas.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getClusterIncidents({ clusters }, requestOptions) {
      if (!clusters) {
        throw new Error("Parameter `clusters` is required when calling `getClusterIncidents`.");
      }
      const requestPath = "/1/incidents/{clusters}".replace("{clusters}", encodeURIComponent(clusters));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the status of selected clusters.
     * @param getClusterStatus - The getClusterStatus object.
     * @param getClusterStatus.clusters - Subset of clusters, separated by commas.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getClusterStatus({ clusters }, requestOptions) {
      if (!clusters) {
        throw new Error("Parameter `clusters` is required when calling `getClusterStatus`.");
      }
      const requestPath = "/1/status/{clusters}".replace("{clusters}", encodeURIComponent(clusters));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves known incidents for all clusters.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getIncidents(requestOptions) {
      const requestPath = "/1/incidents";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves average times for indexing operations for selected clusters.
     * @param getIndexingTime - The getIndexingTime object.
     * @param getIndexingTime.clusters - Subset of clusters, separated by commas.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getIndexingTime({ clusters }, requestOptions) {
      if (!clusters) {
        throw new Error("Parameter `clusters` is required when calling `getIndexingTime`.");
      }
      const requestPath = "/1/indexing/{clusters}".replace("{clusters}", encodeURIComponent(clusters));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the average latency for search requests for selected clusters.
     * @param getLatency - The getLatency object.
     * @param getLatency.clusters - Subset of clusters, separated by commas.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getLatency({ clusters }, requestOptions) {
      if (!clusters) {
        throw new Error("Parameter `clusters` is required when calling `getLatency`.");
      }
      const requestPath = "/1/latency/{clusters}".replace("{clusters}", encodeURIComponent(clusters));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves metrics related to your Algolia infrastructure, aggregated over a selected time window.  Access to this API is available as part of the [Premium or Elevate plans](https://www.algolia.com/pricing). You must authenticate requests with the `x-algolia-application-id` and `x-algolia-api-key` headers (using the Monitoring API key).
     * @param getMetrics - The getMetrics object.
     * @param getMetrics.metric - Metric to report.  For more information about the individual metrics, see the description of the API response. To include all metrics, use `*`.
     * @param getMetrics.period - Period over which to aggregate the metrics:  - `minute`. Aggregate the last minute. 1 data point per 10 seconds. - `hour`. Aggregate the last hour. 1 data point per minute. - `day`. Aggregate the last day. 1 data point per 10 minutes. - `week`. Aggregate the last week. 1 data point per hour. - `month`. Aggregate the last month. 1 data point per day.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getMetrics({ metric, period }, requestOptions) {
      if (!metric) {
        throw new Error("Parameter `metric` is required when calling `getMetrics`.");
      }
      if (!period) {
        throw new Error("Parameter `period` is required when calling `getMetrics`.");
      }
      const requestPath = "/1/infrastructure/{metric}/period/{period}".replace("{metric}", encodeURIComponent(metric)).replace("{period}", encodeURIComponent(period));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Test whether clusters are reachable or not.
     * @param getReachability - The getReachability object.
     * @param getReachability.clusters - Subset of clusters, separated by commas.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getReachability({ clusters }, requestOptions) {
      if (!clusters) {
        throw new Error("Parameter `clusters` is required when calling `getReachability`.");
      }
      const requestPath = "/1/reachability/{clusters}/probes".replace("{clusters}", encodeURIComponent(clusters));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the servers that belong to clusters.  The response depends on whether you authenticate your API request:  - With authentication, the response lists the servers assigned to your Algolia application\'s cluster.  - Without authentication, the response lists the servers for all Algolia clusters.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getServers(requestOptions) {
      const requestPath = "/1/inventory/servers";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves the status of all Algolia clusters and instances.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getStatus(requestOptions) {
      const requestPath = "/1/status";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    }
  };
}

// builds/node.ts
function monitoringClient(appId, apiKey, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  return {
    ...createMonitoringClient({
      appId,
      apiKey,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: "Node.js", version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options
    })
  };
}

var monitoring_star = /*#__PURE__*/Object.freeze({
  __proto__: null,
  apiClientVersion: apiClientVersion$1,
  monitoringClient: monitoringClient
});

// builds/node.ts
var apiClientVersion = "5.13.0";
function getDefaultHosts(appId) {
  return [
    {
      url: `${appId}-dsn.algolia.net`,
      accept: "read",
      protocol: "https"
    },
    {
      url: `${appId}.algolia.net`,
      accept: "write",
      protocol: "https"
    }
  ].concat(
    shuffle([
      {
        url: `${appId}-1.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-2.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-3.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      }
    ])
  );
}
function createRecommendClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  ...options
}) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts(appIdOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Recommend",
      version: apiClientVersion
    }),
    baseHeaders: {
      "content-type": "text/plain",
      ...auth.headers(),
      ...options.baseHeaders
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters
    }
  });
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * Create or update a batch of Recommend Rules  Each Recommend Rule is created or updated, depending on whether a Recommend Rule with the same `objectID` already exists. You may also specify `true` for `clearExistingRules`, in which case the batch will atomically replace all the existing Recommend Rules.  Recommend Rules are similar to Search Rules, except that the conditions and consequences apply to a [source item](/doc/guides/algolia-recommend/overview/#recommend-models) instead of a query. The main differences are the following: - Conditions `pattern` and `anchoring` are unavailable. - Condition `filters` triggers if the source item matches the specified filters. - Condition `filters` accepts numeric filters. - Consequence `params` only covers filtering parameters. - Consequence `automaticFacetFilters` doesn\'t require a facet value placeholder (it tries to match the data source item\'s attributes instead).
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param batchRecommendRules - The batchRecommendRules object.
     * @param batchRecommendRules.indexName - Name of the index on which to perform the operation.
     * @param batchRecommendRules.model - [Recommend model](https://www.algolia.com/doc/guides/algolia-recommend/overview/#recommend-models).
     * @param batchRecommendRules.recommendRule - The recommendRule object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    batchRecommendRules({ indexName, model, recommendRule }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `batchRecommendRules`.");
      }
      if (!model) {
        throw new Error("Parameter `model` is required when calling `batchRecommendRules`.");
      }
      const requestPath = "/1/indexes/{indexName}/{model}/recommend/rules/batch".replace("{indexName}", encodeURIComponent(indexName)).replace("{model}", encodeURIComponent(model));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: recommendRule ? recommendRule : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customDelete - The customDelete object.
     * @param customDelete.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customDelete.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customDelete({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customDelete`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customGet - The customGet object.
     * @param customGet.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customGet.parameters - Query parameters to apply to the current query.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customGet({ path, parameters }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customGet`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * This method allow you to send requests to the Algolia REST API.
     * @param customPut - The customPut object.
     * @param customPut.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPut.parameters - Query parameters to apply to the current query.
     * @param customPut.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPut({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPut`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "PUT",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Deletes a Recommend rule from a recommendation scenario.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param deleteRecommendRule - The deleteRecommendRule object.
     * @param deleteRecommendRule.indexName - Name of the index on which to perform the operation.
     * @param deleteRecommendRule.model - [Recommend model](https://www.algolia.com/doc/guides/algolia-recommend/overview/#recommend-models).
     * @param deleteRecommendRule.objectID - Unique record identifier.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    deleteRecommendRule({ indexName, model, objectID }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `deleteRecommendRule`.");
      }
      if (!model) {
        throw new Error("Parameter `model` is required when calling `deleteRecommendRule`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `deleteRecommendRule`.");
      }
      const requestPath = "/1/indexes/{indexName}/{model}/recommend/rules/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{model}", encodeURIComponent(model)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "DELETE",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves a Recommend rule that you previously created in the Algolia dashboard.
     *
     * Required API Key ACLs:
     *  - settings
     * @param getRecommendRule - The getRecommendRule object.
     * @param getRecommendRule.indexName - Name of the index on which to perform the operation.
     * @param getRecommendRule.model - [Recommend model](https://www.algolia.com/doc/guides/algolia-recommend/overview/#recommend-models).
     * @param getRecommendRule.objectID - Unique record identifier.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRecommendRule({ indexName, model, objectID }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getRecommendRule`.");
      }
      if (!model) {
        throw new Error("Parameter `model` is required when calling `getRecommendRule`.");
      }
      if (!objectID) {
        throw new Error("Parameter `objectID` is required when calling `getRecommendRule`.");
      }
      const requestPath = "/1/indexes/{indexName}/{model}/recommend/rules/{objectID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{model}", encodeURIComponent(model)).replace("{objectID}", encodeURIComponent(objectID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Checks the status of a given task.  Deleting a Recommend rule is asynchronous. When you delete a rule, a task is created on a queue and completed depending on the load on the server. The API response includes a task ID that you can use to check the status.
     *
     * Required API Key ACLs:
     *  - editSettings
     * @param getRecommendStatus - The getRecommendStatus object.
     * @param getRecommendStatus.indexName - Name of the index on which to perform the operation.
     * @param getRecommendStatus.model - [Recommend model](https://www.algolia.com/doc/guides/algolia-recommend/overview/#recommend-models).
     * @param getRecommendStatus.taskID - Unique task identifier.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRecommendStatus({ indexName, model, taskID }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `getRecommendStatus`.");
      }
      if (!model) {
        throw new Error("Parameter `model` is required when calling `getRecommendStatus`.");
      }
      if (!taskID) {
        throw new Error("Parameter `taskID` is required when calling `getRecommendStatus`.");
      }
      const requestPath = "/1/indexes/{indexName}/{model}/task/{taskID}".replace("{indexName}", encodeURIComponent(indexName)).replace("{model}", encodeURIComponent(model)).replace("{taskID}", encodeURIComponent(taskID));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "GET",
        path: requestPath,
        queryParameters,
        headers
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves recommendations from selected AI models.
     *
     * Required API Key ACLs:
     *  - search
     * @param getRecommendationsParams - The getRecommendationsParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRecommendations(getRecommendationsParams, requestOptions) {
      if (getRecommendationsParams && Array.isArray(getRecommendationsParams)) {
        const newSignatureRequest = {
          requests: getRecommendationsParams
        };
        getRecommendationsParams = newSignatureRequest;
      }
      if (!getRecommendationsParams) {
        throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");
      }
      if (!getRecommendationsParams.requests) {
        throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");
      }
      const requestPath = "/1/indexes/*/recommendations";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: getRecommendationsParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Searches for Recommend rules.  Use an empty query to list all rules for this recommendation scenario.
     *
     * Required API Key ACLs:
     *  - settings
     * @param searchRecommendRules - The searchRecommendRules object.
     * @param searchRecommendRules.indexName - Name of the index on which to perform the operation.
     * @param searchRecommendRules.model - [Recommend model](https://www.algolia.com/doc/guides/algolia-recommend/overview/#recommend-models).
     * @param searchRecommendRules.searchRecommendRulesParams - The searchRecommendRulesParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchRecommendRules({ indexName, model, searchRecommendRulesParams }, requestOptions) {
      if (!indexName) {
        throw new Error("Parameter `indexName` is required when calling `searchRecommendRules`.");
      }
      if (!model) {
        throw new Error("Parameter `model` is required when calling `searchRecommendRules`.");
      }
      const requestPath = "/1/indexes/{indexName}/{model}/recommend/rules/search".replace("{indexName}", encodeURIComponent(indexName)).replace("{model}", encodeURIComponent(model));
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchRecommendRulesParams ? searchRecommendRulesParams : {},
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    }
  };
}

// builds/node.ts
function recommendClient(appId, apiKey, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  return {
    ...createRecommendClient({
      appId,
      apiKey,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE
      },
      logger: createNullLogger(),
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: "Node.js", version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options
    })
  };
}

var recommend_star = /*#__PURE__*/Object.freeze({
  __proto__: null,
  apiClientVersion: apiClientVersion,
  recommendClient: recommendClient
});

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget);

// builds/node.ts
var node_exports = {};
__export(node_exports, {
  algoliasearch: () => algoliasearch
});

// builds/models.ts
var models_exports = {};
__reExport(models_exports, client_abtesting_star);
__reExport(models_exports, client_analytics_star);
__reExport(models_exports, client_insights_star);
__reExport(models_exports, client_personalization_star);
__reExport(models_exports, client_query_suggestions_star);
__reExport(models_exports, client_search_star);
__reExport(models_exports, ingestion_star);
__reExport(models_exports, monitoring_star);
__reExport(models_exports, recommend_star);

// builds/node.ts
__reExport(node_exports, models_exports);
function algoliasearch(appId, apiKey, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  const client = searchClient(appId, apiKey, options);
  return {
    ...client,
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return client.transporter.algoliaAgent.value;
    },
    initAbtesting: (initOptions) => {
      return abtestingClient(
        initOptions.appId || appId,
        initOptions.apiKey || apiKey,
        initOptions.region,
        initOptions.options
      );
    },
    initAnalytics: (initOptions) => {
      return analyticsClient(
        initOptions.appId || appId,
        initOptions.apiKey || apiKey,
        initOptions.region,
        initOptions.options
      );
    },
    initIngestion: (initOptions) => {
      return ingestionClient(
        initOptions.appId || appId,
        initOptions.apiKey || apiKey,
        initOptions.region,
        initOptions.options
      );
    },
    initInsights: (initOptions) => {
      return insightsClient(
        initOptions.appId || appId,
        initOptions.apiKey || apiKey,
        initOptions.region,
        initOptions.options
      );
    },
    initMonitoring: (initOptions = {}) => {
      return monitoringClient(initOptions.appId || appId, initOptions.apiKey || apiKey, initOptions.options);
    },
    initPersonalization: (initOptions) => {
      return personalizationClient(
        initOptions.appId || appId,
        initOptions.apiKey || apiKey,
        initOptions.region,
        initOptions.options
      );
    },
    initQuerySuggestions: (initOptions) => {
      return querySuggestionsClient(
        initOptions.appId || appId,
        initOptions.apiKey || apiKey,
        initOptions.region,
        initOptions.options
      );
    },
    initRecommend: (initOptions = {}) => {
      return recommendClient(initOptions.appId || appId, initOptions.apiKey || apiKey, initOptions.options);
    }
  };
}

// function SearchItemDetail(searchResult: SearchResult) {
//   const { isLoading, data, revalidate } = useFetch("https://api.example");
//   return (
//     <Detail
//       isLoading={isLoading}
//       markdown={data}
//       actions={
//         <ActionPanel>
//           <Action title="Reload" onAction={() => revalidate()} />
//         </ActionPanel>
//       }
//     />
//   );
// }
function SearchItem({ searchResult }) {
    // Search Item
    return (jsxRuntimeExports.jsx(List.Item
    // TODO: Better key
    , { 
        // TODO: Consider Icon
        icon: Icon.Bookmark, title: searchResult.title, subtitle: searchResult.subTitle, 
        // TODO: Improve Actions
        actions: jsxRuntimeExports.jsx(ActionPanel, { children: jsxRuntimeExports.jsx(Action.Push, { title: "Show Details", target: jsxRuntimeExports.jsx(Detail, { markdown: `[View Documentation](${searchResult.url})` }) }) }) }, searchResult.title));
}

// TODO: Look into the Frequency Sorting API
// Zod Schema
var ResultType;
(function (ResultType) {
    ResultType["lvl0"] = "lvl0";
    ResultType["lvl1"] = "lvl1";
    ResultType["lvl2"] = "lvl2";
    ResultType["lvl3"] = "lvl3";
    ResultType["lvl4"] = "lvl4";
})(ResultType || (ResultType = {}));
const resultTypeSchema = z.nativeEnum(ResultType);
const searchResponseItemSchema = z.object({
    type: resultTypeSchema,
    hierarchy: z.record(resultTypeSchema, z.string().optional()),
    url: z.string(),
});
// Algolia Config
const algoliaConfig = {
    appId: "CDP8WGS04L",
    apiKey: "fb27c36015ee3fd18739deeb1be5f71b",
    indexName: "grain-lang",
};
// Algolia Search Helper
const searchGrainDocumentation = async (searchClient, query) => {
    // Perform Search
    const algoliaResponse = await searchClient
        .searchSingleIndex({
        indexName: algoliaConfig.indexName,
        searchParams: { query: query },
    })
        .catch((err) => {
        showToast(Toast.Style.Failure, "Algolia Error", err.message);
        return undefined;
    });
    if (algoliaResponse == undefined)
        return [];
    const searchResults = [];
    for (const rawResponseItem of algoliaResponse.hits) {
        console.log(rawResponseItem);
        const searchResponseItemResult = searchResponseItemSchema.safeParse(rawResponseItem);
        if (!searchResponseItemResult.success) {
            console.log(searchResponseItemResult.error);
            console.log("Failed to parse Algolia Response Item ^^^^: ", rawResponseItem);
            continue;
        }
        const searchResponseItem = searchResponseItemResult.data;
        // Build Search Result
        // TODO: Ignore entries like value
        const responseTitle = searchResponseItem.hierarchy[searchResponseItem.type];
        if (responseTitle == null) {
            console.log("Failed to find title in Algolia Response Item: ", rawResponseItem);
            continue;
        }
        const responseUrl = searchResponseItem.url;
        const responseSubTitle = Object.values(searchResponseItem.hierarchy)
            .filter((n) => n != null)
            .join(" > ");
        const responseDocumentPath = responseUrl
            .replace("https://grain-lang.org/docs/stdlib/", "https://raw.githubusercontent.com/grain-lang/grain/refs/heads/main/stdlib/")
            .replace(/#.*$/, "") + ".md";
        // Try Build Detail
        searchResults.push({
            title: responseTitle,
            subTitle: responseSubTitle,
            url: responseUrl,
            markdownPath: responseDocumentPath,
        });
    }
    return searchResults;
};
function Command() {
    // TODO: Investigate the useNavigation API with the hierarchy levels
    // Hooks
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // Create A new Algolia Client
    const searchClient = algoliasearch(algoliaConfig.appId, algoliaConfig.apiKey);
    // Build List Items
    const search = async (query) => {
        setIsLoading(true);
        setSearchResults(await searchGrainDocumentation(searchClient, query));
        setIsLoading(false);
    };
    // Generate Search Items
    const searchItems = [];
    for (const searchResult of searchResults) {
        searchItems.push(jsxRuntimeExports.jsx(SearchItem, { searchResult: searchResult }));
    }
    // Generate Search View
    return (jsxRuntimeExports.jsx(List, { throttle: true, isLoading: isLoading || searchResults === undefined, onSearchTextChange: async (q) => await search(q), children: searchItems }));
}

export { Command as default };
