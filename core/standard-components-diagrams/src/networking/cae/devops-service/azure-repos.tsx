import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_REPOS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Repos.svg;strokeColor=none;',
  },
  _width: 45,
  _height: 50,
}

export function AzureRepos(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_REPOS}
      {...props}
      _style={extendStyle(AZURE_REPOS, props)}
    />
  )
}
