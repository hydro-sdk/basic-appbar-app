import { BuildContext } from "@hydro-sdk/hydro-sdk/runtime/flutter/buildContext";
import { Key } from "@hydro-sdk/hydro-sdk/runtime/flutter/foundation/key";
import {
    Card,
    Colors,
    Theme,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/material/index";
import { CrossAxisAlignment, MainAxisSize } from "@hydro-sdk/hydro-sdk/runtime/flutter/rendering/index";
import { Widget } from "@hydro-sdk/hydro-sdk/runtime/flutter/widget";
import {
    Center,
    Column,
    Icon,
    SizedBox,
    StatelessWidget,
    Text,
} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index";
import { Choice } from "./choice";

export class ChoiceCard extends StatelessWidget {
    public readonly choice: Choice;
    public constructor(props: { choice: Choice }) {
        super();
        this.choice = props.choice;
    }

    public build(context: BuildContext): Widget {
        const textStyle = Theme.of(context).textTheme.display1;
        return new Card({
            color: Colors.white,
            child: new Center({
                child: new Column({
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                        new SizedBox({
                            key: new Key(this.choice.icon.toString()),
                        }),
                        new Icon(this.choice.icon, {
                            size: 128.0,
                            color: textStyle.color,
                        }),
                        new Text(this.choice.title, { style: textStyle }),
                    ],
                }),
            }),
        });
    }
}