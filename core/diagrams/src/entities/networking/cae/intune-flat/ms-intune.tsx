import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MS_INTUNE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.microsoft_intune',
  },
  _original_width: 50,
  _original_height: 40,
}

export function MsIntune(props: NodeProps) {
  return (
    <Shape {...MS_INTUNE} {...props} _style={extendStyle(MS_INTUNE, props)} />
  )
}
