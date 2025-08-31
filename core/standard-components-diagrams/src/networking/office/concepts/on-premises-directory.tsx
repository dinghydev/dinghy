import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ON_PREMISES_DIRECTORY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.on_premises_directory;',
  _width: 50,
  _height: 59,
}

export function OnPremisesDirectory(props: DiagramNodeProps) {
  return (
    <Shape
      {...ON_PREMISES_DIRECTORY}
      {...props}
      _style={extendStyle(ON_PREMISES_DIRECTORY, props)}
    />
  )
}
