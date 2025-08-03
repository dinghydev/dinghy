import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEBAPPUMBRACO = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/WebAppUmbraco.svg;strokeColor=none;',
  _width: 49,
  _height: 50,
}

export function Webappumbraco(props: DiagramNodeProps) {
  return <Shape {...WEBAPPUMBRACO} {...props} />
}
