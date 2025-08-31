import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IN_LINE_STATIC_MIXER = {
  _style: {
    entity:
      'shape=mxgraph.pid.mixers.in-line_static_mixer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
}

export function InLineStaticMixer(props: DiagramNodeProps) {
  return (
    <Shape
      {...IN_LINE_STATIC_MIXER}
      {...props}
      _style={extendStyle(IN_LINE_STATIC_MIXER, props)}
    />
  )
}
