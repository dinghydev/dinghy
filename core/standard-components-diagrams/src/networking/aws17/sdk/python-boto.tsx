import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PYTHON_BOTO = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#FFD44F;gradientColor=none;',
  _width: 73.5,
  _height: 84,
}

export function PythonBoto(props: DiagramNodeProps) {
  return (
    <Shape
      {...PYTHON_BOTO}
      {...props}
      _style={extendStyle(PYTHON_BOTO, props)}
    />
  )
}
