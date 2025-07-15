import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IN_LINE_MIXER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.in-line_mixer;',
  _width: 50,
  _height: 10,
}

export function InLineMixer(props: DiagramNodeProps) {
  return <Shape {...IN_LINE_MIXER} {...props} />
}
