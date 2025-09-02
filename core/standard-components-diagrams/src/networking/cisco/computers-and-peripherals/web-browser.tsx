import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_BROWSER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.web_browser;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 62,
  _original_height: 64,
}

export function WebBrowser(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_BROWSER}
      {...props}
      _style={extendStyle(WEB_BROWSER, props)}
    />
  )
}
