import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILE_SYSTEM = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.file_system;',
  },
  _width: 78,
  _height: 73,
}

export function FileSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...FILE_SYSTEM}
      {...props}
      _style={extendStyle(FILE_SYSTEM, props)}
    />
  )
}
