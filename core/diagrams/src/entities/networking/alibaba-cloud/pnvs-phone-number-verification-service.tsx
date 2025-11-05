import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PNVS_PHONE_NUMBER_VERIFICATION_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.pnvs_phone_number_verification_service;',
  },
  _width: 35.4,
  _height: 50.099999999999994,
}

export function PnvsPhoneNumberVerificationService(props: NodeProps) {
  return (
    <Shape
      {...PNVS_PHONE_NUMBER_VERIFICATION_SERVICE}
      {...props}
      _style={extendStyle(PNVS_PHONE_NUMBER_VERIFICATION_SERVICE, props)}
    />
  )
}
