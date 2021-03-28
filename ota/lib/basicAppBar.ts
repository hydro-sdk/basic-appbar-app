import { Key } from "@hydro-sdk/hydro-sdk/runtime/flutter/foundation/key";
import {
    AppBar,
    IconButton,
    MaterialApp,
    PopupMenuButton,
    PopupMenuItem,
    Scaffold,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/material/index";
import { EdgeInsets } from "@hydro-sdk/hydro-sdk/runtime/flutter/painting/index";
import { Widget } from "@hydro-sdk/hydro-sdk/runtime/flutter/widget";
import {
    Icon,
    Padding,
    State,
    StatefulWidget,
    Text,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index";

import { Choice } from "./choice";
import { ChoiceCard } from "./choiceCard";
import { choices } from "./choices";
export class BasicAppBar extends StatefulWidget {
    public constructor() {
        super();
    }

    public createState(): _BasicAppBarState {
        return new _BasicAppBarState();
    }
}

class _BasicAppBarState extends State<BasicAppBar> {
    public selectedChoice = choices[0];
    public constructor() {
        super();
    }

    public select = (choice: Choice) => {
        this.setState(() => {
            this.selectedChoice = choice;
        });
    };

    public dispose() {}

    public initState() {}

    public build(): Widget {
        return new MaterialApp({
            home: new Scaffold({
                appBar: new AppBar({
                    title: new Text("Basic Appbar"),
                    actions: [
                        new IconButton({
                            key: new Key(choices[0].icon.toString() + "button"),
                            icon: new Icon(choices[0].icon),
                            onPressed: () => {
                                this.select(choices[0]);
                            },
                        }),
                        new IconButton({
                            key: new Key(choices[1].icon.toString() + "button"),
                            icon: new Icon(choices[1].icon),
                            onPressed: () => {
                                this.select(choices[1]);
                            },
                        }),
                        new PopupMenuButton<Choice>({
                            onSelected: (choice: Choice) => {
                                this.select(choice);
                            },
                            itemBuilder: (): PopupMenuItem<Choice>[] => {
                                return choices.map((choice) => {
                                    return new PopupMenuItem<Choice>({
                                        value: choice,
                                        child: new Text(choice.title),
                                    });
                                });
                            },
                        }),
                    ],
                }),
                body: new Padding({
                    padding: EdgeInsets.all(16.0),
                    child: new ChoiceCard({ choice: this.selectedChoice }),
                }),
            }),
            initialRoute: "/",
        });
    }
}
