import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DUPLEX_STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.duplex_strainer;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function DuplexStrainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DUPLEX_STRAINER}
      {...props}
      _style={extendStyle(DUPLEX_STRAINER, props)}
    />
  )
}
