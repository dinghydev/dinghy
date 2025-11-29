import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PYTHON_BOTO = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#FFD44F;gradientColor=none;',
  },
  _original_width: 73.5,
  _original_height: 84,
}

export function PythonBoto(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PYTHON_BOTO)} />
}
