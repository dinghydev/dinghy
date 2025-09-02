import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMB_BUSINESS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.smb_business;',
  },
  _original_width: 38,
  _original_height: 27,
}

export function SmbBusiness(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMB_BUSINESS}
      {...props}
      _style={extendStyle(SMB_BUSINESS, props)}
    />
  )
}
