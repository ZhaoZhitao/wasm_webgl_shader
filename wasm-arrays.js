"use strict";
const ccallArrays = (r,e,a,t,{heapIn: A="HEAPF32", heapOut: s="HEAPF32", returnArraySize: n=1}={})=>{
    const l = {};
    l.HEAP8 = Int8Array,
    l.HEAPU8 = Uint8Array,
    l.HEAP16 = Int16Array,
    l.HEAPU16 = Uint16Array,
    l.HEAP32 = Int32Array,
    l.HEAPU32 = Uint32Array,
    l.HEAPF32 = Float32Array,
    l.HEAPF64 = Float64Array;
    let u, c;
    a = a || [];
    const E = "array" == e ? "number" : e
      , y = []
      , h = []
      , o = [];
    try {
        if (t)
            for (let r = 0; r < t.length; r++)
                if ("array" == a[r] || Array.isArray(t[r])) {
                    const e = new l[A](t[r].length);
                    for (let a = 0; a < t[r].length; a++)
                        e[a] = t[r][a];
                    const a = Module._malloc(e.length * e.BYTES_PER_ELEMENT);
                    switch (A) {
                    case "HEAP8":
                    case "HEAPU8":
                        Module[A].set(e, a);
                        break;
                    case "HEAP16":
                    case "HEAPU16":
                        Module[A].set(e, a >> 1);
                        break;
                    case "HEAP32":
                    case "HEAPU32":
                    case "HEAPF32":
                        Module[A].set(e, a >> 2);
                        break;
                    case "HEAPF64":
                        Module[A].set(e, a >> 3)
                    }
                    o.push(a),
                    y.push(a),
                    y.push(t[r].length),
                    h.push("number"),
                    h.push("number")
                } else
                    y.push(t[r]),
                    h.push(void 0 == a[r] ? "number" : a[r]);
        u = Module.ccall(r, E, h, y)
    } catch (r) {
        c = r
    } finally {
        for (let r = 0; r < o.length; r++)
            _free(o[r])
    }
    if (c)
        throw c;
    if ("array" == e) {
        const r = [];
        for (let e = 0; e < n; e++)
            r.push(Module[s][u / l[s].BYTES_PER_ELEMENT + e]);
        return r
    }
    return u
}
  , cwrapArrays = (r,e,a,{heapIn: t="HEAPF32", heapOut: A="HEAPF32", returnArraySize: s=1}={})=>n=>ccallArrays(r, e, a, n, {
    heapIn: t,
    heapOut: A,
    returnArraySize: s
});
"undefined" == typeof window && (exports.ccallArrays = ccallArrays,
exports.cwrapArrays = ((r,e,a,{heapIn: t="HEAPF32", heapOut: A="HEAPF32", returnArraySize: s=1}={})=>n=>ccallArrays(r, e, a, n, {
    heapIn: t,
    heapOut: A,
    returnArraySize: s
})));
