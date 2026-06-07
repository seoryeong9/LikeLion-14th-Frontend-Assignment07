import { useContext, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { ToastContext } from './context/ToastContext';

function App() {
  const { loading, data, error, errorMessage } = useFetch('/posts');
  const { showToast } = useContext(ToastContext);

  useEffect(() => {
    if (data) showToast('불러오기 성공!');
  }, [data]);

  useEffect(() => {
    if (error) showToast(errorMessage);
  }, [error]);

  if (loading) return <div>로딩 중...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-extrabold text-purple-700 mb-6">게시글 모아보기</h1>

      {data && (
        <div className="grid grid-cols-3 gap-4">
          {data.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-purple-300 rounded-2xl p-6"
            >
              <h2 className="text-lg font-bold text-gray-900">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App; 