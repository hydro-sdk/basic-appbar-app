import { IconData } from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index";

export class Choice {
    public title: string;
    public icon: IconData;

    public constructor(props: { title: string; icon: IconData }) {
        this.title = props.title;
        this.icon = props.icon;
    }
}
