import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECT_RESTORE_TO_MS_AZURE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.direct_restore_to_ms_azure;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function DirectRestoreToMsAzure(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECT_RESTORE_TO_MS_AZURE}
      {...props}
      _style={extendStyle(DIRECT_RESTORE_TO_MS_AZURE, props)}
    />
  )
}
