import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATUS_BAR = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.misc.rrect;rSize=0;strokeColor=#999999;fillColor=#ffffff;',
  },
  _original_width: 500,
  _original_height: 30,
}

export function StatusBar(props: DiagramNodeProps) {
  return (
    <Shape {...STATUS_BAR} {...props} _style={extendStyle(STATUS_BAR, props)} />
  )
}
