import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACMS_APPLICATION_CONFIGURATION_MANANGEMENT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.acms_application_configuration_manangement;',
  },
  _original_width: 51,
  _original_height: 47.400000000000006,
}

export function AcmsApplicationConfigurationManangement(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ACMS_APPLICATION_CONFIGURATION_MANANGEMENT)}
    />
  )
}
