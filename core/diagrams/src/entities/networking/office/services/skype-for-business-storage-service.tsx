import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SKYPE_FOR_BUSINESS_STORAGE_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.skype_for_business_storage_service;',
  },
  _original_width: 62,
  _original_height: 58,
}

export function SkypeForBusinessStorageService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SKYPE_FOR_BUSINESS_STORAGE_SERVICE)}
    />
  )
}
