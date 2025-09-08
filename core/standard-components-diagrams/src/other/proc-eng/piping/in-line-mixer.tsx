import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IN_LINE_MIXER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.in-line_mixer;',
  },
  _original_width: 50,
  _original_height: 10,
}

export function InLineMixer(props: DiagramNodeProps) {
  return (
    <Shape
      {...IN_LINE_MIXER}
      {...props}
      _style={extendStyle(IN_LINE_MIXER, props)}
    />
  )
}
