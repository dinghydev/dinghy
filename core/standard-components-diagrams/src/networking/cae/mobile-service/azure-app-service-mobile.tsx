import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_APP_SERVICE_MOBILE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Service_Mobile_App.svg;strokeColor=none;',
  _width: 34,
  _height: 50,
}

export function AzureAppServiceMobile(props: DiagramNodeProps) {
  return <Shape {...AZURE_APP_SERVICE_MOBILE} {...props} />
}
