import LayoutContent from '../components/common/Layout/LayoutContent';
import Posts from '../components/common/Posts/Posts';

export default function Home() {
  return (
    <LayoutContent title="BWhite" icon="bwhite">
      <div className="text-base">
        <Posts />
      </div>
    </LayoutContent>
  )
}
