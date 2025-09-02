import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STANDARD_HOST = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.standard_host;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 43,
  _original_height: 62,
}

export function StandardHost(props: DiagramNodeProps) {
  return (
    <Shape
      {...STANDARD_HOST}
      {...props}
      _style={extendStyle(STANDARD_HOST, props)}
    />
  )
}
