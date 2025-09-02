import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPORARY_STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.temporary_strainer;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function TemporaryStrainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEMPORARY_STRAINER}
      {...props}
      _style={extendStyle(TEMPORARY_STRAINER, props)}
    />
  )
}
