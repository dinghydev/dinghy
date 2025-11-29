import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_BROWSER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.web_browser;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 62,
  _original_height: 64,
}

export function WebBrowser(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WEB_BROWSER)} />
}
