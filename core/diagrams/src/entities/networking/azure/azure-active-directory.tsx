import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_ACTIVE_DIRECTORY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_active_directory;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function AzureActiveDirectory(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, AZURE_ACTIVE_DIRECTORY)} />
  )
}
