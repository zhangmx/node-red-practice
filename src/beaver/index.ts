import { RED as REDinHtml } from "node-red__editor-client";

function postCommand(cmd: string, body?: any) {
    console.log(cmd, body)
    const opts: JQuery.AjaxSettings = {
        url: "beaver/" + cmd,
        type: "POST",
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    }
    if (body) {
        opts.contentType = "application/json";
        opts.data = JSON.stringify(body);
    }
    $.ajax(opts);
}
// if there is no RED(type: REDinHtml) object then give default value
declare const RED: REDinHtml;
(function () {
    console.log(RED);
    console.log(RED.settings)
    console.log(RED.settings.editorTheme)

    // console.log(RED.nodes.version())
    if (!Object.prototype.hasOwnProperty.call(RED.view, 'annotations')) {
        RED.notify("Beaver requires Node-RED 3.0.2 or later");
        return;
    }
    // const MAX_MESSAGE_LOADED = 10;
    let sidebarContent: JQuery;
    // let activeMessageFilter: string = 'all';

    RED.plugins.registerPlugin("node-red-contrib-beaver", {
        onadd: function () {

            console.log("Beaver plugin added");



            // let beaverState: any;

            // let beaverEnabled = false;
            // let handlingCommsEvent = false;

            sidebarContent = $("<div>").addClass("red-ui-beaver disabled").css({ "position": "relative", "height": "100%" });
            const footerToolbar: JQuery = $('<div>TODO add test case list</div>');

            RED.sidebar.addTab({
                id: "beaver",
                label: RED._("node-red-contrib-beaver/beaver:label.beaverShort"),
                name: RED._("node-red-contrib-beaver/beaver:label.beaver"),
                iconClass: "fa fa-paw",
                content: sidebarContent as unknown as HTMLElement,
                toolbar: footerToolbar as unknown as HTMLElement,
                enableOnEdit: true,
                action: "core:show-beaver-tab"
            });

            const stackContainer: JQuery = $('<div>', { class: "red-ui-beaver-stack" }).css({ height: "100%" }).appendTo(sidebarContent);
            const sections: any = RED.stack.create({
                container: stackContainer
            });
            const breakpointSection: any = sections.add({
                title: RED._("node-red-contrib-beaver/beaver:label.breakpoints"),
                collapsible: true
            });
            breakpointSection.expand();
            breakpointSection.content.css({ height: "100%" });


            RED.events.on("workspace:change", function () {
                return;
            });


            RED.comms.subscribe("beaver/connected", function (_topic, _msg) {
                return;
            });

            RED.actions.add("beaver:show-beaver-tab", () => RED.sidebar.show("beaver"));
            RED.actions.add("beaver:pause-flows", function () { postCommand('pause') });
            // RED.actions.add("beaver:enable-beaver", function () {
            //     beaverEnabledToggle.prop("checked", true).trigger("change");
            // });

        }
    })
})();

export { postCommand };