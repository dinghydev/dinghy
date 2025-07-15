import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_SDK = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_sdk;',
  _width: 50,
  _height: 47.5,
}

export function AzureSdk(props: DiagramNodeProps) {
  return <Shape {...AZURE_SDK} {...props} />
}
