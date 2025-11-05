import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VEEAM_EXPLORER_FOR_ACTIVE_DIRECTORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_explorer_for_active_directory;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function VeeamExplorerForActiveDirectory(props: NodeProps) {
  return (
    <Shape
      {...VEEAM_EXPLORER_FOR_ACTIVE_DIRECTORY}
      {...props}
      _style={extendStyle(VEEAM_EXPLORER_FOR_ACTIVE_DIRECTORY, props)}
    />
  )
}
