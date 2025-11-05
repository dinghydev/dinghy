import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_WEBSITE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_website;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureWebsite(props: NodeProps) {
  return (
    <Shape
      {...AZURE_WEBSITE}
      {...props}
      _style={extendStyle(AZURE_WEBSITE, props)}
    />
  )
}
