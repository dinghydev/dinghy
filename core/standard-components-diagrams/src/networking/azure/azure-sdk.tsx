import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_SDK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_sdk;',
  },
  _original_width: 50,
  _original_height: 47.5,
}

export function AzureSdk(props: DiagramNodeProps) {
  return (
    <Shape {...AZURE_SDK} {...props} _style={extendStyle(AZURE_SDK, props)} />
  )
}
