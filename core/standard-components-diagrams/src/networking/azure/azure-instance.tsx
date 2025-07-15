import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_INSTANCE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_instance;',
  _width: 50,
  _height: 50,
}

export function AzureInstance(props: DiagramNodeProps) {
  return <Shape {...AZURE_INSTANCE} {...props} />
}
