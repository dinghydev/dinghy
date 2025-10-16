import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIRECTOR_CLASS_FIBRE_CHANNEL_DIRECTOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.directors.director-class_fibre_channel_director;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 51,
  _original_height: 69,
}

export function DirectorClassFibreChannelDirector(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECTOR_CLASS_FIBRE_CHANNEL_DIRECTOR}
      {...props}
      _style={extendStyle(DIRECTOR_CLASS_FIBRE_CHANNEL_DIRECTOR, props)}
    />
  )
}
