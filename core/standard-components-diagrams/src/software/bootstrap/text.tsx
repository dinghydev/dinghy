import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEXT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#999999;strokeWidth=1;fillColor=#FFFFFF;fontColor=#6C767D;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;fontSize=14;spacing=10;',
  },
  _original_width: 170,
  _original_height: 160,
}

export function Text(props: DiagramNodeProps) {
  return <Shape {...TEXT} {...props} _style={extendStyle(TEXT, props)} />
}
