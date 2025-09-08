import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IN_LINE_STATIC_MIXER = {
  _style: {
    entity:
      'shape=mxgraph.pid.mixers.in-line_static_mixer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
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
