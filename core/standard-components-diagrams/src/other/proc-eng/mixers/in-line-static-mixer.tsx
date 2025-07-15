import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IN_LINE_STATIC_MIXER = {
  _style:
    'shape=mxgraph.pid.mixers.in-line_static_mixer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function InLineStaticMixer(props: DiagramNodeProps) {
  return <Shape {...IN_LINE_STATIC_MIXER} {...props} />
}
