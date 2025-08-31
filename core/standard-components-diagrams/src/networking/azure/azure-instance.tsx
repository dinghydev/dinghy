import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_INSTANCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_instance;',
  },
  _width: 60,
  _height: 60,
}

export function AzureInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_INSTANCE}
      {...props}
      _style={extendStyle(AZURE_INSTANCE, props)}
    />
  )
}
