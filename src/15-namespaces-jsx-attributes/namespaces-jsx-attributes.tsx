import * as React from "react";

const x = <Foo a:b="hello" />;
const y = <Foo a : b="hello" />;

type FooProps = {
    "a:b": string;
    // "a:c"?: string;
}


function Foo(props: FooProps) {
    const ab = props["a:b"];
    return null;
}

