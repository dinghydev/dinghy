import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_ACTIVE_DIRECTORY = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_active_directory;',
  _width: 47.5,
  _height: 50,
}

export function AzureActiveDirectory(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_ACTIVE_DIRECTORY}
      {...props}
      _style={extendStyle(AZURE_ACTIVE_DIRECTORY, props)}
    />
  )
}
