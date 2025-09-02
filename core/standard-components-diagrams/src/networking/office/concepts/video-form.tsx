import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO_FORM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.video_form;',
  },
  _original_width: 58,
  _original_height: 49,
}

export function VideoForm(props: DiagramNodeProps) {
  return (
    <Shape {...VIDEO_FORM} {...props} _style={extendStyle(VIDEO_FORM, props)} />
  )
}
