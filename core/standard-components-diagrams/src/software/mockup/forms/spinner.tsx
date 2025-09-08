import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPINNER = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.spinner;strokeColor=#999999;spinLayout=right;spinStyle=normal;adjStyle=triangle;fillColor=#aaddff;fontSize=17;fontColor=#666666;mainText=;html=1;overflow=fill;',
  },
  _original_width: 150,
  _original_height: 60,
}

export function Spinner(props: DiagramNodeProps) {
  return <Shape {...SPINNER} {...props} _style={extendStyle(SPINNER, props)} />
}
