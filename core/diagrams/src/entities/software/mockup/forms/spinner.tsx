import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPINNER = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.spinner;strokeColor=#999999;spinLayout=right;spinStyle=normal;adjStyle=triangle;fillColor=#aaddff;fontSize=17;fontColor=#666666;mainText=;html=1;overflow=fill;',
  },
  _width: 150,
  _height: 60,
}

export function Spinner(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPINNER)} />
}
