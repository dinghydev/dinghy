import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_APP_SERVICE_MOBILE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Service_Mobile_App.svg;strokeColor=none;',
  },
  _width: 34,
  _height: 50,
}

export function AzureAppServiceMobile(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, AZURE_APP_SERVICE_MOBILE)} />
  )
}
