import * as React from "react";
import { BoxNumbers } from "./Types";

const ctxt = React.createContext<BoxNumbers | null>(null);

export const NumbersProvider = ctxt.Provider;

export const NumbersConsumer = ctxt.Consumer;
